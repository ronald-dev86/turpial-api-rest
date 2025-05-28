import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { DeleteAuthRepository } from "../../domain/repositories/DeleteAuthRepository";

export class DeleteAuthCollectionFirebase extends CollectionFirebase implements DeleteAuthRepository {
    constructor() {
        super('auth');
    }
    async handle(id: string): Promise<void> {
        try {
            await this.collection.doc(id).delete();
        } catch (error) {
            console.error("Error fetching documents: ", error);
            throw new Error("Error fetching documents from Firestore");
        }
    }
}