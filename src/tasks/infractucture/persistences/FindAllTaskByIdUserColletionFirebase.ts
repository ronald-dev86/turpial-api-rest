import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";
import { Task } from "../../domain/model/Task";
import { FindAllTaskByIdUserRepository } from "../../domain/repositories/FindAllTaskByIdUserRepository";

export class FindAllTaskByIdUserColletionFirebase extends CollectionFirebase implements FindAllTaskByIdUserRepository {
   constructor() {
        super('task');
    }
    async handle(idUser: string): Promise<Task[]> {
        const snapshot = await this.collection.where("idUser", "==", idUser ).get();
        const tasks =  snapshot.docs.map((doc: any) => { 
        const authData = new TimestampFormatFirestoreResponse(doc.data());
            return { id: doc.id, ...authData.Item };  
        });
        return tasks
    }
}