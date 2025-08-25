import { UserId } from "../user/userId";
import { CircleName } from "./circleName";

export class Circle {
    constructor(private userId: UserId, private circleName: CircleName) { }
}
