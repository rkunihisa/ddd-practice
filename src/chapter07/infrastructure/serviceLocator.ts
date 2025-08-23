type Constructor<T> = new (...args: any[]) => T;

export class ServiceLocator {
    private static registry = new Map<string, any>();

    static register<T>(token: string, instance: T): void {
        ServiceLocator.registry.set(token, instance);
    }

    static resolve<T>(token: string): T {
        const instance = ServiceLocator.registry.get(token);
        if (!instance) {
            throw new Error(`Service for token "${token}" not found`);
        }
        return instance as T;
    }
}
