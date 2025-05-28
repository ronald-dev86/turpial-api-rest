import { FindByIdUserService } from "../services/FindByIdUserService";

export class FindByIdUserUseCase {
    constructor(
        private findByIdUserService: FindByIdUserService,
    ) {}
    async execute(id: string): Promise<any> {
        return await this.findByIdUserService.findById(id);
    }
}