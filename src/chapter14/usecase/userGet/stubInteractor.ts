// usecase/userGet/stubInteractor.ts (テスト用スタブ)
import type { IUserGetInputPort, IUserGetPresenter } from "./ports";
import { UserData, UserGetInputData, UserUpdateOutputData } from "./dto";

export class StubUserGetInteractor implements IUserGetInputPort {
  constructor(private readonly presenter: IUserGetPresenter) {}

  handle(_: UserGetInputData): void {
    const userData = new UserData("test-id", "test-user-name");
    const outputData = new UserUpdateOutputData(userData);
    this.presenter.output(outputData);
  }
}
