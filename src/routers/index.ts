import { Request, Response, Router } from "express";
import { TaskController } from "../controller/TaskController";


const taskController = new TaskController();

const Routers = Router()

Routers.get('/',(req:Request,res:Response)=>{

    return res.json({message:'Hello World'})
})

Routers.get('/list',taskController.getAll)
Routers.post('/task',taskController.create)

export {Routers}