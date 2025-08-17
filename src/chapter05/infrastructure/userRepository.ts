import { DataSource, Repository } from "typeorm";
import type { UserRepositoryInterface } from "../domain/model/userRepositoryInterface";
import { User } from "../domain/model/user/user";
import { UserName } from "../domain/model/user/userName";
import { UserEntity } from "./userEntity";

export class UserRepository implements UserRepositoryInterface {
    private ormRepository: Repository<UserEntity>;

    constructor(dataSource: DataSource) {
        this.ormRepository = dataSource.getRepository(UserEntity);
    }

    async save(user: User): Promise<void> {
        const entity = new UserEntity();
        entity.id = user.getId().toString();
        entity.name = user.getName().toString();
        await this.ormRepository.save(entity);
    }

    async find(userName: UserName): Promise<User | null> {
        const entity = await this.ormRepository.findOneBy({ name: userName.toString() });
        if (!entity) return null;
        return new User(new UserName(entity.name));
    }
}
