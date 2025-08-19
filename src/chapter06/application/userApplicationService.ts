import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserService } from "../domain/service/userService";
import { User } from "../domain/model/user/user";
import { UserName } from "../domain/model/user/userName";
import { UserId } from "../domain/model/user/userId";
import { UserDto } from "./userDto";

export class UserApplicationService {
    private readonly userService: UserService;
    private readonly userRepository: UserRepositoryInterface;

    constructor(userService: UserService, userRepository: UserRepositoryInterface) {
        this.userService = userService;
        this.userRepository = userRepository;
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
}
