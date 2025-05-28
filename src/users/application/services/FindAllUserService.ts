import { FindAllUserRepository } from "../../domain/repositories/FindAllUserReporitory";
import { FindAllUserColletionFirestore } from "../../infrastructure/pesistences/FindAllUserColletionFirestore";
import { TimestampFormatFirestoreResponse } from "../../infrastructure/shared/formatFirestoreResponse";

export class FindAllUserService {
    constructor(
        private findAllUserRepository: FindAllUserColletionFirestore,
    ) {}
    
    async findAllUsers(): Promise<any> {
        const users = await this.findAllUserRepository.handle();
        return {
            success: true,
            message: 'Users fetched successfully',
            status: 200,
            data: users
        }
       
        
    }
}