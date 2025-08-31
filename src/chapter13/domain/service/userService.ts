import { inject, injectable } from 'inversify';
import { User } from '../model/user/user';
import type { UserRepositoryInterface } from '../model/user/userRepositoryInterface';

@injectable()
export class UserService {
    constructor(
        @inject("UserRepositoryInterface") private readonly userRepository: UserRepositoryInterface
    ) { }

    public async exists(user: User): Promise<boolean> {
        const foundUser = await this.userRepository.find(user.getId());
        return foundUser !== null;
    }
}
