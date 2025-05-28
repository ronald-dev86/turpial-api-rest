export interface DeleteByIDUserRepository {
    handle(id: string): Promise<void>
}