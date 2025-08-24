import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserService } from "../domain/service/userService";
import { User } from "../domain/model/user/user";
import { UserName } from "../domain/model/user/userName";
import { UserRegisterCommand } from "./userRegisterCommand";
import { inject, injectable } from "inversify";

@injectable()
export class UserApplicationService {
    constructor(
        @inject("UserService") private readonly userService: UserService,
        @inject("UserRepositoryInterface") private readonly userRepository: UserRepositoryInterface
    ) { }

    public async register(command: UserRegisterCommand): Promise<void> {
        const user = new User(new UserName(command.name));
        if (await this.userService.exists(user)) {
            throw new Error("ユーザは既に存在しています。");
        }
        await this.userRepository.save(user);
    }

}
