import { DataSource, Repository } from "typeorm";
import { CircleEntity } from "../../infrastructure/circleEntity"; // TypeORM用エンティティ
import { CircleSummaryDto } from "./circleSummaryDto"; // リードモデル用DTO

export class CircleQueryService {
    private repository: Repository<CircleEntity>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(CircleEntity);
    }

    /**
     * ページング付きでサークル一覧を取得
     * @param page ページ番号（1始まり）
     * @param pageSize 1ページあたりの件数
     */
    async getCircleSummaries(page: number, pageSize: number): Promise<CircleSummaryDto[]> {
        const [entities, total] = await this.repository.findAndCount({
            skip: (page - 1) * pageSize,
            take: pageSize,
            order: { createdAt: "DESC" }
        });

        return entities.map(e => new CircleSummaryDto(e.id, e.name, e.memberCount, e.createdAt));
    }
}
