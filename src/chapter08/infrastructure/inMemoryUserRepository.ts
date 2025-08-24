import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { User } from "../domain/model/user/user";
import type { UserId } from "../domain/model/user/userId";

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

    async find(userId: UserId): Promise<User | null> {
        return this.users.find(user => user.getId() == (userId)) || null;
    }
}
