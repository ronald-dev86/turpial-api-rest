import { TokenOperator } from "../../../shared/json-web-token/TokenOperator";
import { FindUserByIdColletionFirebase } from "../../../users/infrastructure/pesistences/FindUserByIdColletionFirebase";
import { Auth } from "../../domain/model/Auth";
import { FindByUserIdAndTokenAuthCollectionFirebase } from "../../infrastruture/persistences/FindByUserIdAndTokenAuthColletionFirebase";
import { UpdateAuthCollectionFirebase } from "../../infrastruture/persistences/UpdateAuthColletionFirebase";
import { RefreshTokenDTO } from "../dto/RefreshToken.dto";

export class RefreshTokenService {

    constructor(
        private FindByUserIdAndTokenAuthRepository:FindByUserIdAndTokenAuthCollectionFirebase,
        private updateAuthRepository:UpdateAuthCollectionFirebase,
        private findByIdUserRepository:FindUserByIdColletionFirebase,
        private tokenOperator: TokenOperator
    ) {}

    async refreshToken(payload:RefreshTokenDTO): Promise<any> {
        const auth = await this.FindByUserIdAndTokenAuthRepository.handle(payload.idUser,payload.token)
        
        if (auth.length === 0) return {
            success:false,
            message:'token not found',
            status:404
        }

        const user = await this.findByIdUserRepository.handle(auth[0].idUser)
        if (user.length === 0) return {
            success:false,
            message:'user not found',
            status:404
        }
        const newToken = await  this.tokenOperator.generateToken({id:user[0].id})

        const  authData = new Auth(
            auth[0].id, 
            newToken, 
            auth[0].idUser, 
            new Date())
            
        await this.updateAuthRepository.handle(authData)

        return {
            success:true,
            message:'token refreshed successfully',
            status:200,
            data:[{token:newToken}]
        }


    }


}