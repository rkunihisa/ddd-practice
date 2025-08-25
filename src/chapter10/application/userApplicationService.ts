import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserService } from "../domain/service/userService";
import { UserName } from "../domain/model/user/userName";
import { UserRegisterCommand } from "./userRegisterCommand";
import { inject, injectable } from "inversify";
import type { UserFactoryInterface } from "../domain/model/user/userFactoryInterface";
import * as mysql from "mysql2/promise";

@injectable()
export class UserApplicationService {
    constructor(
        @inject("UserService") private readonly userService: UserService,
        @inject("UserRepositoryInterface") private readonly userRepository: UserRepositoryInterface,
        private readonly userFactory: UserFactoryInterface,
        private readonly connection: mysql.Connection
    ) { }

    public async register(command: UserRegisterCommand): Promise<void> {
        await this.connection.beginTransaction();
        try {
            const userName = new UserName(command.name);
            const user = this.userFactory.create(userName);
            if (await this.userService.exists(user)) {
                throw new Error("ユーザは既に存在しています。");
            }
            await this.userRepository.save(user);
            await this.connection.commit();
        } catch (err) {
            await this.connection.rollback();
            throw err;
        }
    }
}
