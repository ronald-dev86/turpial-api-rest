import { CreateUserDTO } from "../dto/createUser.dto";
import { SaveUserService } from "../services/SaveUserService";

export class SaveUserUseCase {
  
  constructor(
    private SaveUserService: SaveUserService,
  ) {}

  async execute(payload:CreateUserDTO) : Promise<any> {
    return await this.SaveUserService.createUsers(payload);
  }
}