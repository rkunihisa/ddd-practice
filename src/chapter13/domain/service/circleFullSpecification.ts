import type { UserRepositoryInterface } from "../model/user/userRepositoryInterface";
import { Circle } from "../model/circle/circle";

export class CircleFullSpecification {
    constructor(private readonly userRepository: UserRepositoryInterface){}

    async isSatisfiedBy(circle: Circle): Promise<boolean> {
        const users = await this.userRepository.find(circle.getMembers());

        const premiumUserNumber = users.filter(user => user.isPremium()).length;
        const circleUpperLimit = premiumUserNumber < 10 ? 30 : 50;

        return circle.getMembers().length < circleUpperLimit;
    }
}
