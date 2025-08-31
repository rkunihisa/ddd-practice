import { UserId } from "../model/user/userId";
import { UserName } from "../model/user/userName";
import type { UserNotificationInterface } from "../model/user/userNotificationInterface";

export class UserDataModelBuilder implements UserNotificationInterface {
    constructor(private id: UserId, private name: UserName) {}

    setId(userId: UserId): void {
        this.id = userId;
    }

    setName(userName: UserName): void {
        this.name = userName;
    }
}
