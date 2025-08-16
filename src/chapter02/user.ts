import { UserId } from "./userId";
import { UserName } from "./userName";

export class User {
    constructor(
        private id: UserId,
        private name: UserName
    ) {}

    getId(): UserId {
        return this.id;
    }

    getName(): UserName {
        return this.name;
    }
}
