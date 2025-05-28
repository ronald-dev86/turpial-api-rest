import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { User } from "../../domain/models/users";
import { TimestampFormatFirestoreResponse } from "../shared/formatFirestoreResponse";
import { FindAllUserRepository } from "../../domain/repositories/FindAllUserReporitory";

export class FindAllUserColletionFirestore extends CollectionFirebase implements FindAllUserRepository {
    constructor() {
        super('users');
    }
    async handle():Promise<User[]> {
        try {
            const snapshot = await this.collection.get();
            const users =  snapshot.docs.map((doc: any) => {
                const userData = new TimestampFormatFirestoreResponse(doc.data());
                return { id: doc.id, ...userData.Item };  
            });
            return users as User[]
        } catch (error) {
            console.error('Error fetching users:', error);
            throw new Error('Error fetching users');
        }
    }
}