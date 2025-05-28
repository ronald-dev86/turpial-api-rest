
export class User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public active: boolean,
        public createdAt: Date ,
        public updatedAt: Date
    ){}
}