import { Auth as FirebaseAuth } from "firebase-admin/lib/auth/auth";
import { Auth } from "../../domain/model/Auth";
import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { FindByTokenAuthRepository } from "../../domain/repositories/FindByTokenAuthRepository";
import { TimestampFormatFirestoreResponse } from "../../../users/infrastructure/shared/formatFirestoreResponse";

export class FindByTokenAuthColletionFirebase extends CollectionFirebase implements FindByTokenAuthRepository {
    constructor() {
        super("auth");
    }

    async handle(token: string): Promise<Auth[]> {
        try {
            const snapshot = await this.collection.where('token', '==', token).get();
            const auth = snapshot.docs.map((doc: any) => {
                const authData = new TimestampFormatFirestoreResponse(doc.data());
                return {
                    id: doc.id,
                    ...authData.Item
                } ;
            });

            return auth;
        } catch (error) {
            console.error("Error fetching documents: ", error);
            throw new Error("Error fetching documents from Firestore");
        }
    }
}