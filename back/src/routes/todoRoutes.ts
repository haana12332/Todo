import { Router } from "express"
import { createTodo, } from "../Service/createTodo"
import { readTodoList } from "../Service/readTodo"
import { deleteTodo, updateTodo } from "../Infra/todoRepository"
import { getTodos } from "../application/useCase/getTodo"

const router = Router()

router.post("/", async (req, res) => {
  try {
    const { text } = req.body
    const todo = await createTodo(text)
    res.status(201).json(todo)
  } catch (e) {
    res.status(400).json({ error: "failed to create" })
  }
})

router.get("/",async (req,res)=>{
  try{
    const todolist = await readTodoList()
    res.status(201).json(todolist)
  } catch(e){
    res.status(400).json({ error: "failed to read list" })
  }
})

router.patch("/:id", async (req, res) => {
  try{
      const { id } = req.params
      const updates = req.body
      const updated = await updateTodo(id, updates)
      res.status(201).json(updated)
  }catch(e){
      res.status(400).json({ error: "failed to update" })

  }
})

router.delete("/:id",async (req, res) =>{
  try{
    const {id} =req.params
    await deleteTodo(id)
    res.status(204).send()
  }catch(e){
    res.status(400).json({error: "failed to delete"})
  }
})

router.get("/", async (req, res) => {
  const { filter, keyword, sort } = req.query

  const todos = await getTodos({ filter, keyword, sort })

  res.json(todos)
})


export default router