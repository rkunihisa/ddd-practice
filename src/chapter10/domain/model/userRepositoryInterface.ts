import { User } from './user/user';
import { UserId } from './user/userId';

export interface UserRepositoryInterface {
    save(user: User): Promise<void>;
    find(userId: UserId): Promise<User | null>;
}
