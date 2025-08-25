import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { UserService } from "../domain/service/userService";
import { UserName } from "../domain/model/user/userName";
import { UserRegisterCommand } from "./userRegisterCommand";
import { inject, injectable } from "inversify";
import type { UserFactoryInterface } from "../domain/model/user/userFactoryInterface";
import * as mysql from "mysql2/promise";

// AOPデコレーター（クラス外で定義）
function Transactional(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
        // @ts-ignore 実行時にはthisはUserApplicationServiceのインスタンスになる
        const connection = this.connection;
        await connection.beginTransaction();
        try {
            const result = await originalMethod.apply(this, args);
            await connection.commit();
            return result;
        } catch (err) {
            await connection.rollback();
            throw err;
        }
    };
}

@injectable()
export class UserApplicationService {
    constructor(
        @inject("UserService") private readonly userService: UserService,
        @inject("UserRepositoryInterface") private readonly userRepository: UserRepositoryInterface,
        private readonly userFactory: UserFactoryInterface,
        private readonly connection: mysql.Connection
    ) { }

    @Transactional
    public async register(command: UserRegisterCommand): Promise<void> {
        const userName = new UserName(command.name);
        const user = this.userFactory.create(userName);
        if (await this.userService.exists(user)) {
            throw new Error("ユーザは既に存在しています。");
        }
        await this.userRepository.save(user);
    }
}


