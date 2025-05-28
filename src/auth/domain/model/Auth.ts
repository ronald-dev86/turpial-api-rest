export class Auth{
    constructor(
        public id: string,
        public token: string,
        public idUser: string,
        public createdAt: Date = new Date(),
    ){}
}