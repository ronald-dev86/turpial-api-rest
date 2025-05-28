import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserUseCase{
    constructor(private deleteUserService:DeleteUserService){}
    async execute(id:string):Promise<any>{
        return await this.deleteUserService.deleteUserById(id)
    }
}