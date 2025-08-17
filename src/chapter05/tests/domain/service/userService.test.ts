import { UserService } from "../../../domain/service/userService";
import { InMemoryUserRepository } from "../../inMemory/inMemoryUserRepository";

describe("UserService", () => {
    let userService: UserService;

    beforeEach(() => {
        const userRepository = new InMemoryUserRepository();
        userService = new UserService(userRepository);
    });

    it("新規ユーザーを作成できる", async () => {
        await expect(userService.createUser("testuser")).resolves.toBeUndefined();
    });

    it("同じユーザー名で作成するとエラーになる", async () => {
        await userService.createUser("duplicate");
        await expect(userService.createUser("duplicate")).rejects.toThrow("User already exists");
    });
});
