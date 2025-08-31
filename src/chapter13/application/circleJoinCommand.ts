export class CircleJoinCommand {
    constructor(private userId: string, private circleId: string) { }

    getUserId(): string {
        return this.userId;
    }

    getCircleId(): string {
        return this.circleId;
    }
}
