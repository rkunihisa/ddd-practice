export class UserName {
    constructor(private value: string) {
        if(value == null) {
            throw new Error("Invalid user name");
        }
        if(value.length < 2 || value.length > 100) {
            throw new Error("User name must be between 2 and 100 characters");
        }
    }
}
