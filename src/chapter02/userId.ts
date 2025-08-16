export class UserId {
    constructor(
        private value: string
    ) {
        if(value == null) {
            throw new Error("Invalid user ID");
        }
    }
}
