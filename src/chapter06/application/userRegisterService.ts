import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserService } from "../domain/service/userService";
import { User } from "../domain/model/user/user";
import { UserName } from "../domain/model/user/userName";

export class UserRegisterService {
    private readonly userService: UserService;
    private readonly userRepository: UserRepositoryInterface;

    constructor(userService: UserService, userRepository: UserRepositoryInterface) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    public async handle(name: string): Promise<void> {
        const user = new User(new UserName(name));
        if (await this.userService.exists(user)) {
            throw new Error("ユーザは既に存在しています。");
        }
        await this.userRepository.save(user);
    }
}
