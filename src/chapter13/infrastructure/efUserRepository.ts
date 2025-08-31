import { User } from "../domain/model/user/user";
import type { UserId } from "../domain/model/user/userId";
import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserDataModelBuilder } from "../domain/service/userDataModelBuilder";

export class EFUserRepository implements UserRepositoryInterface {
    find(userId: UserId): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    save(user: User): Promise<void> {
        const userDataModelBuilder = new UserDataModelBuilder(user.getId(), user.getName());
        user.notify(userDataModelBuilder);

        const userDataModel = userDataModelBuilder.build();

        return Promise.resolve();
    }

    findById(id: string): Promise<User | null> {
        // Implementation for finding a user by ID
        return Promise.resolve(null);
    }

}
