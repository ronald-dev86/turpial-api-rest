import { FindTaskByIdService } from "../service/FindTaskByIdService";

export class FindTaskByIdUseCase {
    constructor(private findTaskbyIDService: FindTaskByIdService) {}

    async execute(id: string): Promise<any> {
        return await this.findTaskbyIDService.run(id);
    }

}