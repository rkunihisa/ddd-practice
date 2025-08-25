export class MailAddress {
    constructor(private value: string) {
        if(value == null) {
            throw new Error("Invalid mail address");
        }
    }

    public getValue(): string {
        return this.value;
    }
}
