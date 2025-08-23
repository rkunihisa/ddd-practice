import { ServiceLocator } from "./infrastructure/serviceLocator";
import { UserRepository } from "./infrastructure/userRepository";
import { UserService } from "./domain/service/userService";
import { DataSource } from "typeorm";
import { UserEntity } from "./infrastructure/userEntity";

// TypeORMのDataSourceを初期化
const dataSource = new DataSource({
    type: "sqlite", // 必要に応じてmysql, postgresなどに変更
    database: "test.db",
    entities: [UserEntity],
    synchronize: true,
});

// 非同期初期化（必要ならawaitで初期化完了を待つ）
await dataSource.initialize();

// UserRepositoryのインスタンスを生成
const userRepository = new UserRepository(dataSource);

// ServiceLocatorに登録
ServiceLocator.register("UserRepositoryInterface", userRepository);

// UserServiceのインスタンスも必要なら登録
const userService = new UserService(userRepository);
ServiceLocator.register("UserService", userService);
