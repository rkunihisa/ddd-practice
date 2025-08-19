import { User } from "../domain/model/user/user";

export class UserDto {

    private id: string;
    private name: string;

    constructor(
        public source: User
    ) {
        this.id = source.getId().toString();
        this.name = source.getName().toString();
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}
