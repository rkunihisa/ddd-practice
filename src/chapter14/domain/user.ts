// domain/user.ts
export class UserId {
  constructor(public readonly value: string) {
    if (!value) throw new Error("UserId is required");
  }
}

export class UserName {
  constructor(public readonly value: string) {
    if (!value) throw new Error("UserName is required");
  }
}

export class User {
  constructor(public readonly id: UserId, public readonly name: UserName) {}
}
