export class Name {
    private value: string;

    constructor(value: string) {
        if (!value) {
            throw new Error("Invalid name");
        }
        if (value.length < 2 || value.length > 100) {
            throw new Error("Name must be between 2 and 100 characters");
        }
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }
}
