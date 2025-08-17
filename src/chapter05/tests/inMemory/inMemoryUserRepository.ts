import type { UserRepositoryInterface } from "../../domain/model/userRepositoryInterface";
import { User } from "../../domain/model/user/user";
import { UserName } from "../../domain/model/user/userName";

export class InMemoryUserRepository implements UserRepositoryInterface {
    private users: User[] = [];

    async save(user: User): Promise<void> {
        const index = this.users.findIndex(u => u.getId().toString() === user.getId().toString());
        if (index >= 0) {
            this.users[index] = user;
        } else {
            this.users.push(user);
        }
    }

    async find(userName: UserName): Promise<User | null> {
        const user = this.users.find(u => u.getName().toString() === userName.toString());
        if (!user) return null;
        return new User(new UserName(user.getName().toString()));
    }
}
