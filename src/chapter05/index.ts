import { DataSource } from "typeorm";
import { UserEntity } from "./infrastructure/userEntity";
import { UserApplication } from "./application/userApplication";

const dataSource = new DataSource({
    type: "sqlite",
    database: "test.db",
    entities: [UserEntity],
    synchronize: true,
});

await dataSource.initialize();

const userApp = new UserApplication(dataSource);
userApp.createUser("John Doe");
