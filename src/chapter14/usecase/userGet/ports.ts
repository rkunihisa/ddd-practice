// usecase/userGet/ports.ts
import { UserGetInputData, UserUpdateOutputData } from "./dto";

export interface IUserGetInputPort {
  handle(inputData: UserGetInputData): void;
}

export interface IUserGetPresenter {
  output(data: UserUpdateOutputData): void;
}
