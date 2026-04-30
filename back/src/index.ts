import express from "express"
import todoRoutes from "./routes/todoRoutes"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173"
}))


app.use("/todos", todoRoutes)

const PORT = process.env.BACKEND_PORT || 3000

app.listen(PORT, () => {
  console.log("Server running on port",PORT)
})