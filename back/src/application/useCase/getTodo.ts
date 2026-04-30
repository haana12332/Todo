import { fetchTodos } from "../../infrastructure/todoRepository"
import { filterTodos } from "../services/filterTodos"
import { searchTodos } from "../services/searchTodos"
import { sortTodos } from "../services/sortTodos"

export const getTodos = async ({ filter, keyword, sort }) => {
  const snapshot = await fetchTodos()

  let todos = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))

  todos = filterTodos(todos, filter)
  todos = searchTodos(todos, keyword)
  todos = sortTodos(todos, sort)

  return todos
}