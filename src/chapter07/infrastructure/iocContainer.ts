import "reflect-metadata";
import { Container } from "inversify";

// 必要な型やクラスをimport
import { UserRepository } from "./userRepository";
import { UserService } from "../domain/service/userService";
import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";

// IoCコンテナのインスタンス生成
const container = new Container();

// 依存オブジェクトのバインド例
container.bind<UserRepositoryInterface>("UserRepositoryInterface").to(UserRepository);
container.bind<UserService>("UserService").to(UserService);

export { container };
