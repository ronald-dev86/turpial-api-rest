import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { User } from "../../domain/models/users";
import { FindByIdUserRepository } from "../../domain/repositories/FindByIdUserRepository";
import { TimestampFormatFirestoreResponse } from "../shared/formatFirestoreResponse";

export class FindUserByIdColletionFirebase extends CollectionFirebase implements FindByIdUserRepository  {
    constructor() {
        super("users");
    }
    async handle(id: string): Promise<User[]> {
       try {
           const snapshot = await this.collection.get(id);
           const users =  snapshot.docs.map((doc: any) => {
               const userData = new TimestampFormatFirestoreResponse(doc.data());
               return { id: doc.id, ...userData.Item };  
           });
           return users
       } catch (error) {
           console.error('Error fetching users:', error);
           throw new Error('Error fetching users');
       }
    }

}