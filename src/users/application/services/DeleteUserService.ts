import { DeleteUserColletionFirestore } from "../../infrastructure/pesistences/DeleteUserColletionFirestore";

export class DeleteUserService{
    constructor(private deleteByIDUserRepository:DeleteUserColletionFirestore){}

    async deleteUserById(id:string):Promise<any>{
        await this.deleteByIDUserRepository.handle(id);
        return {
            success:true,
            status:201,
            messaje:"User deleted successfully"
        }
    }
}