export interface findTaskByIdRepository {
    handle(id: string): Promise<any>;
}