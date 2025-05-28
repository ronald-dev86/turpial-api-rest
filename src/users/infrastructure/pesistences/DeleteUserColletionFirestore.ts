
import { CollectionFirebase } from "../../../shared/persistences/ColletionFirebase";
import { DeleteByIDUserRepository } from "../../domain/repositories/DeleteByIDUserRepository";

export class DeleteUserColletionFirestore extends CollectionFirebase implements DeleteByIDUserRepository {
   

    constructor() {
        super("users")
    }
    async handle(id:string):Promise <void> {
       
    }
}