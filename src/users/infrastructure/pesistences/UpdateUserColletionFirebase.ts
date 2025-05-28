
import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { User } from "../../../users/domain/models/users";
import { UpdateUserRepository } from "../../domain/repositories/UpdateUserRepository";

export class UpdateUserColletionFirebase extends CollectionFirebase implements  UpdateUserRepository{
    constructor() {
        super("users");
    }   
    async handle(id:string, user:User): Promise<void> {
        try {
            await this.collection.doc(user.id).update({...user});
       } catch (error) {
           console.error("Error saving document: ", error);
           throw new Error("Error saving document to Firestore");
       }
    }
}