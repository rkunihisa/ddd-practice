import { DataSource } from "typeorm";
import { UserService } from '../domain/service/userService';
import { UserRepository } from '../infrastructure/userRepository';

export class UserApplication {
    private userService: UserService;

    constructor(dataSource: DataSource) {
        const userRepository = new UserRepository(dataSource);
        this.userService = new UserService(userRepository);
    }

    public async createUser(userName: string) {
        await this.userService.createUser(userName);
    }
}
