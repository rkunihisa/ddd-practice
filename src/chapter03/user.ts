import { UserId } from "./userId";

class User {
    private _name!: string;
    private readonly _id!: UserId;

    constructor(name: string, id: UserId) {
        if (id == null) {
            throw new Error("Invalid user ID");
        }

        this.changeName(name);
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public changeName(name: string): void {
        if (name == null) {
            throw new Error("Invalid user name");
        }
        if (name.length < 2 || name.length > 100) {
            throw new Error("User name must be between 2 and 100 characters");
        }
        this._name = name;
    }

    public equals(other: User): boolean {
        if (other == null) {
            return false;
        }
        // 比較はid同士で行われる
        return this._id.equals(other._id);
    }

}
