import { User } from './user/user';
import { UserId } from './user/userId';

export interface UserRepositoryInterface {
    find(userId: UserId): Promise<User | null>;
    save(user: User): Promise<void>;
}
