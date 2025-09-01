// usecase/userGet/interactor.ts
import type { IUserGetInputPort, IUserGetPresenter } from "./ports";
import type { IUserRepository } from "./repository";
import { UserId } from "../../domain/user";
import { UserData, UserGetInputData, UserUpdateOutputData } from "./dto";

export class UserGetInteractor implements IUserGetInputPort {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly presenter: IUserGetPresenter
  ) {}

  handle(inputData: UserGetInputData): void {
    const targetId = new UserId(inputData.userId);
    const user = this.userRepository.find(targetId);

    const userData = new UserData(user.id.value, user.name.value);
    const outputData = new UserUpdateOutputData(userData);

    this.presenter.output(outputData);
  }
}
