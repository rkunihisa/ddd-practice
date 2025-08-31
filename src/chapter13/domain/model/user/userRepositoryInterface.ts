import { User } from './user';
import { UserId } from './userId';

export interface UserRepositoryInterface {
    save(user: User): Promise<void>;
    find(userId: UserId): Promise<User | null>;
    find(users: User[]): Promise<User[]>;
}
