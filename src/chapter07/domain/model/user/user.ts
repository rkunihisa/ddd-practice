import { UserId } from "./userId";
import { UserName } from "./userName";
import { MailAddress } from "./mailAddress";
import { v4 as uuidv4 } from "uuid";

export class User {
    private id: UserId;
    private name: UserName;
    private mailAddress: MailAddress;

    constructor(name: UserName);
    constructor(name: UserName, mailAddress?: MailAddress, id?: UserId);

    // 実装は1つ
    constructor(name: UserName, mailAddress?: MailAddress, id?: UserId) {
        if (name == null) {
            throw new Error("Invalid user name");
        }
        this.name = name;
        this.mailAddress = mailAddress ?? new MailAddress("");
        this.id = id ?? new UserId(uuidv4());
    }

    getId(): UserId {
        return this.id;
    }

    getName(): UserName {
        return this.name;
    }

    getMailAddress(): MailAddress {
        return this.mailAddress;
    }

    changeName(newName: UserName): void {
        if (newName == null) {
            throw new Error("Invalid user name");
        }
        this.name = newName;
    }

    changeMailAddress(newMailAddress: MailAddress): void {
        if (newMailAddress == null) {
            throw new Error("Invalid mail address");
        }
        this.mailAddress = newMailAddress;
    }
}
