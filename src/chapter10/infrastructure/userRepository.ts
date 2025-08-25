import * as mysql from "mysql2/promise";
import { User } from "../domain/model/user/user";
import { UserId } from "../domain/model/user/userId";
import { UserName } from "../domain/model/user/userName";

export class UserRepository {
    private connection: mysql.Connection;

    constructor(connection: mysql.Connection) {
        this.connection = connection;
    }

    async save(user: User): Promise<void> {
        await this.connection.execute(
            "INSERT INTO users (id, name) VALUES (?, ?) ON DUPLICATE KEY UPDATE name = ?",
            [user.getId().toString(), user.getName().toString(), user.getName().toString()]
        );
    }

    async find(userId: UserId): Promise<User | null> {
        const [rows] = await this.connection.execute<mysql.RowDataPacket[]>(
            "SELECT id, name FROM users WHERE id = ?",
            [userId.toString()]
        );
        const result = (rows as mysql.RowDataPacket[])[0];
        if (!result) return null;
        return new User(new UserName(result.name), new UserId(result.id));
    }
}
