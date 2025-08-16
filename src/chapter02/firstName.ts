export class FirstName {
    private firstName: string;

    constructor(firstName: string) {
        if (!firstName) {
            throw new Error("Invalid first name");
        }
        this.firstName = firstName;
    }

    getValue(): string {
        return this.firstName;
    }
}
