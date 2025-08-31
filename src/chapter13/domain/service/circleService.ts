import type { CircleRepositoryInterface } from '../model/circle/circleRepositoryInterface';
import { Circle } from '../model/circle/circle';

export class CircleService {
    constructor(private readonly circleRepository: CircleRepositoryInterface) { }

    async exists(circle: Circle): Promise<boolean> {
        const duplicated = await this.circleRepository.find(circle.getCircleName());
        return duplicated != null;
    }
}
