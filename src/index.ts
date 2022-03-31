import express from 'express'
import { Routers } from './routers';
import { connectDB } from './database/db';
const PORT = 3333

connectDB()
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(Routers)


app.listen(PORT,()=>console.log(`👍Server running at: 🚀 http://localhost:${PORT}`))