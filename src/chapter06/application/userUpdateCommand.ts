export class UserUpdateCommand {
    public readonly id: string;
    public name?: string;
    public mailAddress?: string;

    constructor(id: string) {
        this.id = id;
    }
}
