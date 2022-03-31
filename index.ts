import express from 'express'
import { Routers } from './src/routers';
import { connectDB } from './src/database/db';
import 'dotenv/config'

const PORT = process.env.PORT || 3333

connectDB()
const app = express();

app.use(express.json())
app.use(Routers)

app.listen(PORT,()=>console.log(`👍Server running at: 🚀 http://localhost:${PORT}`))