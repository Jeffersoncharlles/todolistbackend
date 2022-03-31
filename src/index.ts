import express from 'express'
import {app,PORT} from '../index'
import { Routers } from './routers';

app.use(express.json())
app.use(Routers)

app.listen(PORT,()=>console.log(`👍Server running at: 🚀 http://localhost:${PORT}`))