
import { FindAllUserService } from "../services/FindAllUserService";

export class FindAllUsersUseCase {
  
  constructor(
    private findAllUserService: FindAllUserService,
  ) {}

  async execute() : Promise<any> {
    return await this.findAllUserService.findAllUsers();
  }
}