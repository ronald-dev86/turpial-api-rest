import { UpdateUserDTO } from "../dto/UpdateUser.dto";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserUseCase {
    constructor(
        private updateUserService: UpdateUserService ) {}
    async execute(id: string, user:UpdateUserDTO): Promise<any> {
       return  await  this.updateUserService.updateUser(id, user);
    }
}