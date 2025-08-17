import { User } from './user/user';
import { UserName } from './user/userName';

export interface UserRepositoryInterface {
    save(user: User): Promise<void>;
    find(userName: UserName): Promise<User | null>;
}
