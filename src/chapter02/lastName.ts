export class LastName {
    private lastName: string;

    constructor(lastName: string) {
        if (!lastName) {
            throw new Error("Invalid last name");
        }
        this.lastName = lastName;
    }

    getValue(): string {
        return this.lastName;
    }
}
