import type { CircleFactoryInterface } from "../domain/model/circle/circleFactoryInterface";
import { CircleName } from "../domain/model/circle/circleName";
import type { CircleRepositoryInterface } from "../domain/model/circle/circleRepositoryInterface";
import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import type { CircleService } from "../domain/service/circleService";
import type { CircleCreateCommand } from "./circleCreateCommand";
import {UserId} from "../domain/model/user/userId";
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
        const memberId = new UserId(command.getUserId());
        const member = await this.userRepository.find(memberId);
        if (member === null) {
            throw new Error("User not found");
        }

        const id = new CircleId(command.getCircleId());
        const circle = await this.circleRepository.find(id);
        if (circle === null) {
            throw new Error("Circle not found");
        }
        if (circle.isFull()) {
            throw new Error("Circle is full");
        }
        circle.addMember(memberId);
        await this.circleRepository.save(circle);
    }
}
