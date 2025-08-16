import { User } from './user'
import { UserName } from './userName';

class UserService {
    public createUser(userName: string){
        const user = new User(
            new UserName(userName)
        );

        if(this.exists(user)) {
            throw new Error("User already exists");
        }
        //DB処理
    }

    public exists(user: User): boolean {
        //DB処理
        return false;
    }
}
