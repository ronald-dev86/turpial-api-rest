import { compareSync } from "bcrypt";
import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";
import { Task } from "../../domain/model/Task";
import { findTaskByIdRepository } from "../../domain/repositories/findTaskByIdRepository";

export class  FindTaskByIdColletionFirebase extends CollectionFirebase implements findTaskByIdRepository {
    constructor() {
        super('task');
    }   
    async handle(id: string): Promise<Task[]> {
           try {
               const snapshot = await this.collection.doc(id).get();
               if(!snapshot.exists) return [];
                const taskData = new TimestampFormatFirestoreResponse(snapshot.data());
                return [{ id: id, ...taskData.Item }];   
           } catch (error) {
               console.error('Error fetching users:', error);
               throw new Error('Error fetching users');
           }
        }
}