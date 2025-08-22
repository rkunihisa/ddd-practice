import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserId } from "../domain/model/user/userId";
import { UserUpdateCommand } from "./userUpdateCommand";

export class UserDeleteService {
    private readonly userRepository: UserRepositoryInterface;

    constructor(userRepository: UserRepositoryInterface) {
        this.userRepository = userRepository;
    }

    public async handle(command: UserUpdateCommand): Promise<void> {
        const targetId = new UserId(command.id);
        const user = await this.userRepository.find(targetId);
        if (!user) {
            return;
        }

        await this.userRepository.delete(user);
    }
}
