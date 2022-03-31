import express, { json } from 'express'
import { Routers } from './routers';
const PORT = 3333

const app = express();
app.use(express.json())
app.use(Routers)


app.listen(PORT,()=>console.log(`👍Server running at: 🚀${PORT}`))