import { User } from '../model/user/user';
import type { UserRepositoryInterface } from '../model/userRepositoryInterface';

export class UserService {
    constructor(private readonly userRepository: UserRepositoryInterface) { }

    public async exists(user: User): Promise<boolean> {
        const foundUser = await this.userRepository.find(user.getId());
        return foundUser !== null;
    }
}
