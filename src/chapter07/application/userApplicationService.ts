import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserService } from "../domain/service/userService";
import { User } from "../domain/model/user/user";
import { MailAddress } from "../domain/model/user/mailAddress";
import { UserName } from "../domain/model/user/userName";
import { UserId } from "../domain/model/user/userId";
import { UserDto } from "./userDto";
import { UserUpdateCommand } from "./userUpdateCommand";
import { ServiceLocator } from "../infrastructure/serviceLocator";

export class UserApplicationService {
    private readonly userService: UserService;
    private readonly userRepository: UserRepositoryInterface;

    constructor(userService: UserService) {
        this.userService = userService;
        this.userRepository = ServiceLocator.resolve<UserRepositoryInterface>("UserRepositoryInterface");
    }

    public async register(name: string): Promise<void> {
        const user = new User(new UserName(name));
        if (await this.userService.exists(user)) {
            throw new Error("ユーザは既に存在しています。");
        }
        await this.userRepository.save(user);
    }

    public async get(userId: string): Promise<UserDto | null> {
        const targetId = new UserId(userId);
        const user = await this.userRepository.find(targetId);

        if (!user) {
            return null;
        }

        const userDto = new UserDto(user);
        return userDto;
    }

    public async update(command: UserUpdateCommand): Promise<void> {
        const targetId = new UserId(command.id);
        const user = await this.userRepository.find(targetId);
        if (user == null) {
            throw new Error("ユーザが見つかりません。");
        }
        const name = command.name;
        if (name != null) {
            user.changeName(new UserName(name));
            if (await this.userService.exists(user)) {
                throw new Error("ユーザは既に存在しています。");
            }
        }

        const mailAddress = command.mailAddress;
        if (mailAddress != null) {
            user.changeMailAddress(new MailAddress(mailAddress));
        }

        await this.userRepository.save(user);
    }
}
