import { User } from '../model/user/user';
import type { UserRepositoryInterface } from '../model/userRepositoryInterface';

export class UserService {
    constructor(private readonly userRepository: UserRepositoryInterface) {}

    public async exists(user: User): Promise<boolean> {
        // const foundUser = await this.userRepository.find(user.getName());
        const foundUser = await this.userRepository.find(user.getMailAddress());
        return foundUser !== null;
    }
}
