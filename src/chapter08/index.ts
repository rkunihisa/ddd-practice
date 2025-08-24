import { StartupIocContainer } from "./startupIocContainer";
import { UserApplicationService } from "./application/userApplicationService";
import { UserRegisterCommand } from "./application/userRegisterCommand";
import type { Container } from "@inversifyjs/container/lib/cjs/container/services/Container";
import * as readline from "readline";

function main(): void {
    const container = startup();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const askUserName = () => {
        rl.question("Enter user name: ", async (input) => {
            const userApplicationService = container.get<UserApplicationService>("UserApplicationService");
            const command = new UserRegisterCommand(input);
            await userApplicationService.register(command);
            console.log(`Registered user: ${input}`);

            rl.question("Continue? (y/n): ", (answer) => {
                if (answer.toLowerCase() === "y") {
                    askUserName();
                } else {
                    rl.close();
                }
            });
        });
    };

    askUserName();
}

function startup(): Container {
    const startupIocContainer = new StartupIocContainer();
    return startupIocContainer.startup();
}

if (require.main === module) {
    main();
}
