import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { Task } from "../../domain/model/Task";
import { UpdateTaskRepository } from "../../domain/repositories/UpdateTaskRepository";


export class UpdateTaskColletionFirebase extends CollectionFirebase implements UpdateTaskRepository {

    constructor() {
        super('task');        
    }
    async handle(payload: Task, id: string): Promise<void>{
           try {
            await this.collection.doc(payload.id).update({...payload});
       } catch (error) {
           console.error("Error saving document: ", error);
           throw new Error("Error saving document to Firestore");
       }
    }
}