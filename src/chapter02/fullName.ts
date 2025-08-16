import { Name } from "./name"

class FullName {

    private firstName: Name;
    private lastName: Name;

    constructor(firstName: Name, lastName: Name) {
        if (!firstName || !lastName) {
            throw new Error("Invalid name");
        }
        this.firstName = firstName;
        this.lastName = lastName;
    }

    equals(other: FullName): boolean {
        return this.firstName === other.firstName
            && this.lastName === other.lastName;
    }
}
