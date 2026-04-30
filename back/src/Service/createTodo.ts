import { read } from "node:fs"
import { addTodo } from "../Infra/todoRepository"

export const createTodo = async (text: string) => {
    if (!text) throw new Error("text is required")

    return await addTodo(text)
}
