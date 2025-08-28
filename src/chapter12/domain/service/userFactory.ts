import type { UserFactoryInterface } from "../model/user/userFactoryInterface";
import { User } from "../model/user/user";
import { UserName } from "../model/user/userName";
import { UserId } from "../model/user/userId";
import { v4 as uuidv4 } from "uuid";

export class UserFactory implements UserFactoryInterface {
    create(name: UserName): User {
        const id = new UserId(uuidv4());
        return new User(name, id);
    }
}
