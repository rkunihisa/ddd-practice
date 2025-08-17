import { User } from '../chapter05/user';
import { UserName } from '../chapter05/userName';

export interface UserRepositoryInterface {
    save(user: User): Promise<void>;
    find(userName: UserName): Promise<User | null>;
}
