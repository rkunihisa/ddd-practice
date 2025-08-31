export class CircleCreateCommand {
    constructor(private userId: string, private name: string) { }

    getUserId(): string {
        return this.userId;
    }

    getName(): string {
        return this.name;
    }
}
