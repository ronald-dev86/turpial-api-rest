import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";
import { Auth } from "../../domain/model/Auth";
import { FindByIdUserAuthRepository } from "../../domain/repositories/FindByIdUserAuthRepository";

export class FindByIdUserAuthCollectionFirebase  extends CollectionFirebase implements FindByIdUserAuthRepository{
    constructor() {
        super("auth");
    }
    async handle(idUser: string): Promise<Auth[]> {
        const snapshot = await this.collection.where("idUser", "==", idUser).get();
        const auth =  snapshot.docs.map((doc: any) => { 
            const authData = new TimestampFormatFirestoreResponse(doc.data());
            return { id: doc.id, ...authData.Item };  
        });
        return auth
    }
}