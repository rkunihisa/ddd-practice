import { CircleName } from "./circleName";
import { CircleId } from "./circleId";
import { UserId } from "../user/userId";

export class Circle {
    constructor(
        private circleId: CircleId,
        private circleName: CircleName,
        private userId: UserId,
        private members: UserId[] = []
    ) {
        if (circleId == null) {
            throw new Error("CircleId cannot be null or undefined");
        }
        if (circleName == null) {
            throw new Error("CircleName cannot be null or undefined");
        }
        if (userId == null) {
            throw new Error("UserId cannot be null or undefined");
        }
        if (members == null) {
            throw new Error("Members cannot be null or undefined");
        }
    }

    getCircleId(): CircleId {
        return this.circleId;
    }

    getCircleName(): CircleName {
        return this.circleName;
    }

    getUserId(): UserId {
        return this.userId;
    }

    getMembers(): UserId[] {
        return this.members;
    }

    addMember(user: UserId): void {
        this.members.push(user);
    }

    isFull(): boolean {
        return this.members.length + 1 >= 30;
    }
}
