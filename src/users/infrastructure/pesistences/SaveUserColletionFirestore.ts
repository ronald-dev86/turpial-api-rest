import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { User } from "../../domain/models/users";
import { SaveUserRepository } from "../../domain/repositories/SaveUserRepository";


export class SaveUserCollectionFirestore extends CollectionFirebase implements SaveUserRepository {
    ; 

    constructor() {
        super('users');
    }
    async handle( user: User): Promise<void> {
        try {
            await this.collection.doc(user.id).set({... user}); 
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Error fetching users');
        }
    }

    
}