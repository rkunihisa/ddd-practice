import { UserId } from "./userId";
import { UserName } from "./userName";

import { v4 as uuidv4 } from "uuid";

export class User {
    private readonly id: UserId;
    private readonly name: UserName;

    constructor(
        name: UserName
    ) {
        this.id = new UserId(uuidv4());
        this.name = name;
    }

    getId(): UserId {
        return this.id;
    }

    getName(): UserName {
        return this.name;
    }
}
