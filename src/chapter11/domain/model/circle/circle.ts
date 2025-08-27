import { User } from "../user/user";
import { CircleName } from "./circleName";
import { CircleId } from "./circleId";

export class Circle {
    constructor(
        private circleId: CircleId,
        private circleName: CircleName,
        private userId: User,
        private members: User[] = []
    ) {
        if(circleId == null){
            throw new Error("CircleId cannot be null or undefined");
        }
        if(circleName == null){
            throw new Error("CircleName cannot be null or undefined");
        }
        if(userId == null){
            throw new Error("UserId cannot be null or undefined");
        }
        if(members == null){
            throw new Error("Members cannot be null or undefined");
        }
    }

    getCircleId(): CircleId {
        return this.circleId;
    }

    getCircleName(): CircleName {
        return this.circleName;
    }

    getUserId(): User {
        return this.userId;
    }

    getMembers(): User[] {
        return this.members;
    }

    addMember(user: User): void {
        this.members.push(user);
    }
}
