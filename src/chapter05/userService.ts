import { User } from './user'
import { UserName } from './userName';
import type { UserRepositoryInterface } from './userRepositoryInterface';

class UserService {
    constructor(private userRepository: UserRepositoryInterface) { }

    public async createUser(userName: string) {
        const user = new User(
            new UserName(userName)
        );

        if (await this.exists(user)) {
            throw new Error("User already exists");
        }

        await this.userRepository.save(user);
    }

    private async exists(user: User): Promise<boolean> {
        const foundUser = await this.userRepository.find(user.getName());
        return foundUser !== null;
    }
}
