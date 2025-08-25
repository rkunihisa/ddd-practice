import { UnitOfWork } from "./unitOfWork";
import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserService } from "../domain/service/userService";
import { UserName } from "../domain/model/user/userName";
import { UserRegisterCommand } from "./userRegisterCommand";
import { inject, injectable } from "inversify";
import type { UserFactoryInterface } from "../domain/model/user/userFactoryInterface";

@injectable()
export class UserApplicationServiceUoW {
    constructor(
        @inject("UserService") private readonly userService: UserService,
        @inject("UserRepositoryInterface") private readonly userRepository: UserRepositoryInterface,
        private readonly userFactory: UserFactoryInterface,
        private readonly unitOfWork: UnitOfWork
    ) { }

    public async register(command: UserRegisterCommand): Promise<void> {
        const userName = new UserName(command.name);
        const user = this.userFactory.create(userName);
        if (await this.userService.exists(user)) {
            throw new Error("ユーザは既に存在しています。");
        }
        this.unitOfWork.registerNew(user);
        try {
            await this.userRepository.save(user);
            await this.unitOfWork.commit();
        } catch (err) {
            await this.unitOfWork.rollback();
            throw err;
        }
    }
}


