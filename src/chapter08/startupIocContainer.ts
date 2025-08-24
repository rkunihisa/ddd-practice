import "reflect-metadata";
import { Container, injectable } from "inversify";
import type { UserRepositoryInterface } from "./domain/model/userRepositoryInterface";
import { UserApplicationService } from "./application/userApplicationService";
import { InMemoryUserRepository } from "./infrastructure/inMemoryUserRepository";
import { UserService } from "./domain/service/userService";

export class StartupIocContainer {

    startup(): Container {
        // IoCコンテナのインスタンス生成
        const container = new Container();

        // UserRepositoryをバインド
        container.bind<UserRepositoryInterface>("UserRepositoryInterface").toDynamicValue(() => {
            return new InMemoryUserRepository();
        });

        container.bind<UserService>("UserService").to(UserService);
        container.bind<UserApplicationService>("UserApplicationService").to(UserApplicationService);

        return container;
    }
}
