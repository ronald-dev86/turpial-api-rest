import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { FindByUserIdAndTokenAuthRepository } from "../../domain/repositories/FindByUserIdAndTokenAuthRepository";
import { Auth } from "../../domain/model/Auth";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";

export class FindByUserIdAndTokenAuthCollectionFirebase  extends CollectionFirebase implements FindByUserIdAndTokenAuthRepository{
    constructor(){
        super("auth");
    }
    async handle(idUser: string, token: string): Promise<Auth[]> {
        const snapshot = await this.collection.where('token', '==', token).where('idUser', '==', idUser).get();
        const auth =  snapshot.docs.map((doc: any) => {
            const authData = new TimestampFormatFirestoreResponse(doc.data());
            return { id: doc.id, ...authData.Item };  
        });
        return auth
    }    
}