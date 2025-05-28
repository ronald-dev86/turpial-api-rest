import { FindAllTaskByIdUserService } from "../service/FindAllTaskByIdUserService";

export class FindAllTaskByIdUserUseCase
 {
    constructor(private findAllTaskByIdUserService: FindAllTaskByIdUserService) {}

    async execute(id: string): Promise<any> {
        return await this.findAllTaskByIdUserService.run(id);
    }
}