import { CircleName } from "./circleName";
import { Circle } from "./circle";
import { User } from "../user/user";

export interface CircleFactoryInterface {
    create(name: CircleName, owner: User): Circle;
}
