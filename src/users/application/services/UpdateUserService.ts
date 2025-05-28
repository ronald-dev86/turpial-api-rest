import { KeyOperator } from "../../../shared/key-operator/KeyOperator";
import { User } from "../../domain/models/users";
import { FindUserByIdColletionFirebase } from "../../infrastructure/pesistences/FindUserByIdColletionFirebase";
import { UpdateUserColletionFirebase } from "../../infrastructure/pesistences/UpdateUserColletionFirebase";
import { UpdateUserDTO } from "../dto/UpdateUser.dto";

export class UpdateUserService {
    constructor(
        private updateUserRepository: UpdateUserColletionFirebase,
        private FindUserByIdRepository: FindUserByIdColletionFirebase,
        private keyOperator: KeyOperator

    ) {}
   async  updateUser(id: string, payload: UpdateUserDTO):Promise<any> {
        const userFound = await this.FindUserByIdRepository.handle(id);
        if(userFound.length === 0) return {
            status: 404,
            message: "User not found",
            data:[]
        }
        let userUpdate: Partial<User> = {};
        for (const key in userFound[0]) {
            if (Object.prototype.hasOwnProperty.call(userFound[0], key)) {
                if(payload[key as keyof UpdateUserDTO] === undefined) {
                    userUpdate = {...userUpdate, [key]: userFound[0][key as keyof User]};
                    continue
                };
               
                userUpdate = {...userUpdate, [key]: payload[key as keyof UpdateUserDTO]};
            }
        }
        
        const user = new User(
            id,
            userUpdate.name || userFound[0].name,
            userUpdate.email || userFound[0].email,
            userUpdate.active || userFound[0].active,    
            userUpdate.createdAt || userFound[0].createdAt, 
            new Date()
        )

    
        await this.updateUserRepository.handle(id, user);
        
        return {
            status: 200,
            message: "User updated successfully"
        };
   }
}