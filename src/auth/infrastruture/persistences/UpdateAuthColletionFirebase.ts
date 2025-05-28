import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { Auth } from "../../domain/model/Auth";
import { UpdateAuthRepository } from "../../domain/repositories/UpdateAuthRepository";

export class UpdateAuthCollectionFirebase extends CollectionFirebase implements UpdateAuthRepository{
    constructor() {
        super("auth");
    }
    async handle(auth: Auth): Promise<void> {
        try {
            await this.collection.doc(auth.id).update({...auth});
       } catch (error) {
           console.error("Error saving document: ", error);
           throw new Error("Error saving document to Firestore");
       }
    }
}