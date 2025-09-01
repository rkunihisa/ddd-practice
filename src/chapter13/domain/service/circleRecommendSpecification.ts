import { Circle } from '../model/circle/circle';

export class CircleRecommendSpecification {
    constructor(private readonly executeDateTime: Date) {}

    isSatisfiedBy(circle: Circle): boolean {
        if (circle.countMembers() < 10) {
            return false;
        }
        return circle.getCreatedAt() > this.executeDateTime;
    }
}
