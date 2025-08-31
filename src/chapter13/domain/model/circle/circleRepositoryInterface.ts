import type { Circle } from "./circle";
import type { CircleId } from "./circleId";
import type { CircleName } from "./circleName";

export interface CircleRepositoryInterface {
    save(circle: Circle): Promise<void>;
    find(circleId: CircleId): Promise<Circle | null>;
    find(circleName: CircleName): Promise<Circle | null>;
}
