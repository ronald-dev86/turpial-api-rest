import firestore from "../../core/database/firestore";
export class CollectionFirebase{
    public collection: any;
    constructor(colletionName: string) {
        this.collection = firestore.collection(colletionName)
    }
}