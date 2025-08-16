import { FirstName } from "./firstName"
import { LastName } from "./lastName";

class FullName {

    private firstName: FirstName;
    private lastName: LastName;

    constructor(firstName: FirstName, lastName: LastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    equals(other: FullName): boolean {
        return this.firstName === other.firstName
            && this.lastName === other.lastName;
    }
}
