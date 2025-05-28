export class CreateTaskDto {
    constructor(
        public idUser: string,
        public title: string,
        public description: string,
        public status: string,
    ) {}
}