import { UserId } from "./userId";
import { UserName } from "./userName";

export class User {
    private id: UserId;
    private name: UserName;

    constructor(name: UserName, id: UserId) {
        if (name == null) {
            throw new Error("Invalid user name");
        }
        if (id == null) {
            throw new Error("Invalid user id");
        }
        this.name = name;
        this.id = id;
    }

    getId(): UserId {
        return this.id;
    }

    getName(): UserName {
        return this.name;
    }

    changeName(newName: UserName): void {
        if (newName == null) {
            throw new Error("Invalid user name");
        }
        this.name = newName;
    }
}
