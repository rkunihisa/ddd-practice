export class CircleId {
    constructor(private value: string) {
        if (value == null) {
            throw new Error("CircleId cannot be null or undefined");
        }
    }

    public getValue(): string {
        return this.value;
    }
}
