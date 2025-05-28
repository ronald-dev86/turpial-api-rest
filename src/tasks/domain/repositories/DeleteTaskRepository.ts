export  interface DeleteTaskRepository {
    handle(id: string): Promise<void>
}