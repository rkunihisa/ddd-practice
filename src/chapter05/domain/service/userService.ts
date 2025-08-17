import { User } from '../model/user/user'
import { UserName } from '../model/user/userName';
import type { UserRepositoryInterface } from '../model/userRepositoryInterface';

export class UserService {
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
