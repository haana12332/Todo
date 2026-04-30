import { getTodoList } from "../Infra/todoRepository"

export const readTodoList = async () => {
    return await getTodoList()
}