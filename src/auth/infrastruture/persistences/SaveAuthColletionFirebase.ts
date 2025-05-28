import { Auth } from "../../domain/model/Auth";
import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { SaveAuthRepository } from "../../domain/repositories/SaveAuthRepository";

export class SaveAuthCollectionFirebase extends CollectionFirebase implements SaveAuthRepository {
    constructor(){
        super("auth");
    }
    async handle(auth: Auth): Promise<void> {
        try {
            await this.collection.doc(auth.id).set({...auth});
       } catch (error) {
           console.error("Error saving document: ", error);
           throw new Error("Error saving document to Firestore");
       }
    }
}