export class UserId {
    constructor(
        private id: string
    ) {
        if (id == null || id.trim() === "") {
            throw new Error("Invalid user ID");
        }
    }

    public equals(other: UserId): boolean {
        if (other == null) {
            return false;
        }
        return this.id === other.id;
    }

}
