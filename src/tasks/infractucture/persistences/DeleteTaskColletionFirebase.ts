import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { DeleteTaskRepository } from "../../domain/repositories/DeleteTaskRepository";

export class DeleteTaskColletionFirebase extends CollectionFirebase implements DeleteTaskRepository {

    constructor() {
        super('task');
    }
    async handle(id: string): Promise<void>{
        try {
            await this.collection.doc(id).delete();
        } catch (error) {
            console.error("Error fetching documents: ", error);
            throw new Error("Error fetching documents from Firestore");
        }
    }
}