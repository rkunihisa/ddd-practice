// usecase/userGet/dto.ts
export class UserGetInputData {
  constructor(public readonly userId: string) {}
}

export class UserData {
  constructor(public readonly id: string, public readonly name: string) {}
}

export class UserUpdateOutputData {
  constructor(public readonly user: UserData) {}
}
