import { DeleteAuthRepository } from "../../domain/repositories/DeleteAuthRepository";
import { DeleteAuthCollectionFirebase } from "../../infrastruture/persistences/DeleteAuthColletionFirebase";
import { FindByIdUserAuthCollectionFirebase } from "../../infrastruture/persistences/FindByIdUserAuthColletionFirebase";

export class LogoutService {
    constructor(
        private findByIdUserAuthRepository:FindByIdUserAuthCollectionFirebase,
        private deleteAuthRepository:DeleteAuthCollectionFirebase
     ) {}
    async logout(idUser: string): Promise<any> {
        const auths = await this.findByIdUserAuthRepository.handle(idUser);
        auths.map(async (auth) => await this.deleteAuthRepository.handle(auth.id));

        return { 
            success: true, 
            message: "logout successfully", 
            status: 200 
        };  
    }
}