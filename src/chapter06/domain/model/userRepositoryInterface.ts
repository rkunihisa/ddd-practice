import { User } from './user/user';
import type { UserId } from './user/userId';
import { UserName } from './user/userName';

export interface UserRepositoryInterface {
    find(userName: UserName): Promise<User | null>;
    find(userId: UserId): Promise<User | null>;
    save(user: User): Promise<void>;
    delete(user: User): Promise<void>;
}
