import { FindUserByEmailColletionFirestore } from "../../../users/infrastructure/pesistences/FindUserByEmailColletionFirestore";
import { SaveAuthCollectionFirebase } from "../../infrastruture/persistences/SaveAuthColletionFirebase";
import { KeyOperator } from "../../../shared/key-operator/KeyOperator";
import { TokenOperator } from "../../../shared/json-web-token/TokenOperator";
import { LoginDTO } from "../dto/login.dto";
import { Auth } from "../../domain/model/Auth";
import { v4 as uuidv4 } from 'uuid';



export class LoginService {
    constructor( 
        private findByEmailUserRepository: FindUserByEmailColletionFirestore,
        private saveAuthRepository: SaveAuthCollectionFirebase,
        private keyOperator:KeyOperator,
        private tokenOperator:TokenOperator,
    ) {}

    async login(access:LoginDTO) : Promise<any> {
        const user = await this.findByEmailUserRepository.handle(access.email)
        if (user.length === 0) return {
                success:false,
                message:'User not found',
                status:404
            }     
        
        const token = await this.tokenOperator.generateToken({id:user[0].id, email:user[0].email})
        const authData = new Auth(
            uuidv4(),
            token,
            user[0].id,
            new Date()
        );
        await this.saveAuthRepository.handle(authData)
        return {
                success:true,
                message: 'Login successful' ,
                status:200,   
                token:token
        }
        
    }
}