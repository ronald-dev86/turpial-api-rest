export class UpdateTaskDto {
    constructor(
        public id: string,
        public title?: string,
        public description?: string,
        public status?: string,
    ) {}
}