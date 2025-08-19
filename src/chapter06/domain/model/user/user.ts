import { UserId } from "./userId";
import { UserName } from "./userName";

import { v4 as uuidv4 } from "uuid";

export class User {
    private id: UserId;
    private name: UserName;

    // オーバーロード宣言
    constructor(name: UserName);
    constructor(name: UserName, id: UserId);

    // 実装は1つ
    constructor(name: UserName, id?: UserId) {
        if (name == null) {
            throw new Error("Invalid user name");
        }
        this.name = name;
        this.id = id ?? new UserId(uuidv4());
    }

    getId(): UserId {
        return this.id;
    }

    getName(): UserName {
        return this.name;
    }

    changeName(newName: UserName): void {
        if(newName == null) {
            throw new Error("Invalid user name");
        }
        this.name = newName;
    }
}
