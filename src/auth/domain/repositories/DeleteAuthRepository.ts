export interface DeleteAuthRepository {
    handle(id: string): Promise<void>
}