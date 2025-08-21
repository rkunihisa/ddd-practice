import type { MailAddress } from './user/mailAddress';
import { User } from './user/user';
import type { UserId } from './user/userId';

export interface UserRepositoryInterface {
    find(mailAddress: MailAddress): Promise<User | null>;
    find(userId: UserId): Promise<User | null>;
    save(user: User): Promise<void>;
    delete(user: User): Promise<void>;
}
