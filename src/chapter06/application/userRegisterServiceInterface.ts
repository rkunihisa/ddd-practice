export interface UserRegisterServiceInterface {
    handle(name: string): Promise<void>;
}
