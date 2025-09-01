// usecase/userGet/repository.ts
import { User, UserId } from "../../domain/user";

export interface IUserRepository {
  find(id: UserId): User;
}
