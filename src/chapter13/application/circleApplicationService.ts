import type { CircleFactoryInterface } from "../domain/model/circle/circleFactoryInterface";
import { CircleName } from "../domain/model/circle/circleName";
import type { CircleRepositoryInterface } from "../domain/model/circle/circleRepositoryInterface";
import type { UserRepositoryInterface } from "../domain/model/user/userRepositoryInterface";
import type { CircleService } from "../domain/service/circleService";
import type { CircleCreateCommand } from "./circleCreateCommand";
import { UserId } from "../domain/model/user/userId";
import { CircleId } from "../domain/model/circle/circleId";
import type { CircleJoinCommand } from "./circleJoinCommand";

export class CircleApplicationService {
    constructor(
        private readonly circleFactory: CircleFactoryInterface,
        private readonly circleRepository: CircleRepositoryInterface,
        private readonly circleService: CircleService,
        private readonly userRepository: UserRepositoryInterface
    ) { }

    async create(command: CircleCreateCommand): Promise<void> {
        const ownerId = new UserId(command.getUserId());
        const owner = await this.userRepository.find(ownerId);
        if (owner === null) {
            throw new Error("User not found");
        }

        const name = new CircleName(command.getName());
        const circle = await this.circleFactory.create(name, owner);
        if (await this.circleService.exists(circle)) {
            throw new Error("Circle already exists");
        }

        await this.circleRepository.save(circle);
    }

    async join(command: CircleJoinCommand): Promise<void> {

        const circleId = new CircleId(command.getCircleId());
        const circle = await this.circleRepository.find(circleId);
        if (circle === null) {
            throw new Error("Circle not found");
        }

        const users = await this.userRepository.find(circle.getMembers());

        const premiumUserNumber = users.filter(user => user.isPremium()).length;
        const circleUpperLimit = premiumUserNumber < 10 ? 30 : 50;

        if (circle.getMembers().length >= circleUpperLimit) {
            throw new Error("Circle member limit reached");
        }

        circle.join(member);
        await this.circleRepository.save(circle);
    }
}
