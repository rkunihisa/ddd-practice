export class UserId {
    constructor(
        private value: string
    ) {
        if(value == null) {
            throw new Error("Invalid user ID");
        }
    }

    public getValue(): string {
        return this.value;
    }
}
