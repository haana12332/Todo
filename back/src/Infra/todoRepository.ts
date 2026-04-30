import { db } from "./firebaseConfig"

export const addTodo = async (text: string) => {
    const docRef = await db.collection("todos").add({
        text,
        completed: false,
        createdAt: new Date()
    })
    return {
        id: docRef.id,
        text,
        completed: false,
        createdAt: new Date().toISOString()
    }
}

export const getTodoList = async ()=>{
    const snapshot = await db.collection("todos").get()
    const todos = snapshot.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
    }))
    return todos
}

export const updateTodo = async (
  id: string,
  updates: { text?: string; completed?: boolean }
) => {
  await db.collection("todos").doc(id).update(updates)

  return { id, ...updates }
}

export const deleteTodo = async (
    id: string
) => {
    await db.collection("todos").doc(id).delete()

    return 
}