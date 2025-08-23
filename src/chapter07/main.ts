import "reflect-metadata";
import { container } from "./infrastructure/iocContainer";
import { UserApplicationService } from "./application/userApplicationService";

// インスタンスはIoCコンテナ経由で取得
const userApplicationService = container.get<UserApplicationService>(UserApplicationService);
userApplicationService.register("John Doe");
