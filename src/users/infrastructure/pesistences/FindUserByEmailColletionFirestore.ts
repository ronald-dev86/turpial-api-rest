import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { User } from "../../domain/models/users";
import { FindByEmailUserRepository } from "../../domain/repositories/FindByEmailUserRepository";
import { TimestampFormatFirestoreResponse } from "../shared/formatFirestoreResponse";

export class FindUserByEmailColletionFirestore extends CollectionFirebase implements FindByEmailUserRepository {
    
    constructor() {
        super('users');
    }
    async handle(email: string): Promise <User[]> {
        try {
            const snapshot = await this.collection.where('email', '==', email).get()
            const users =  snapshot.docs.map((doc: any) => {
                            const userData = new TimestampFormatFirestoreResponse(doc.data());
                            return { id: doc.id, ...userData.Item };  
                        });
            return users as User[]
        }catch(error) {
            console.error('Error fetching users:', error);
            throw new Error('Error fetching users');
        }
    }
}