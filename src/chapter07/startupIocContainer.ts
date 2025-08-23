import "reflect-metadata";
import { Container } from "inversify";
import { DataSource } from "typeorm";
import { UserEntity } from "./infrastructure/userEntity";
import { UserRepository } from "./infrastructure/userRepository";
import type { UserRepositoryInterface } from "./domain/model/userRepositoryInterface";
import { UserApplicationService } from "./application/userApplicationService";

// TypeORMのDataSourceを初期化
const dataSource = new DataSource({
    type: "sqlite",
    database: "test.db",
    entities: [UserEntity],
    synchronize: true,
});

await dataSource.initialize();

// IoCコンテナのインスタンス生成
const container = new Container();

// UserRepositoryをバインド（インスタンス化時にdataSourceを渡す）
container.bind<UserRepositoryInterface>("UserRepositoryInterface").toDynamicValue(() => {
    return new UserRepository(dataSource);
});

container.bind<UserApplicationService>(UserApplicationService).toSelf();


export { container };
