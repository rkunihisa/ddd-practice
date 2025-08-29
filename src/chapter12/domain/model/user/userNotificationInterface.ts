import { UserId} from './userId';
import { UserName } from './userName';

export class UserNotificationInterface {
    setId(userId: UserId): void {}
    setName(userName: UserName): void {}
}
