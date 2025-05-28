export class Task{
    constructor(
        public id: string,
        public idUser: string,
        public title: string,
        public description: string,
        public status: string,
        public createdAt: Date ,
        public updatedAt: Date,
        public active: boolean
    ){}
}