import type { UserName } from "./userName"
import type { User } from "./user"

export interface UserFactoryInterface {
    create(name: UserName): User
}
