import { FindUserByIdColletionFirebase } from "../../infrastructure/pesistences/FindUserByIdColletionFirebase";

export  class FindByIdUserService{
    constructor(
        private findByIdUserRepository: FindUserByIdColletionFirebase){}
    async findById(id: string): Promise<any> {
        const user = await this.findByIdUserRepository.handle(id);
        if(user.length === 0) return {
            success:false,
            status:404,
            message:"User not found"
        }
        return {
            success:true,
            status:200,
            message:"User found",
            data:user
        }
    }
}