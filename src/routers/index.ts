import { Request, Response, Router } from "express";
import { TaskController } from "../controller/TaskController";


const taskController = new TaskController();

const Routers = Router()

Routers.get('/',(req:Request,res:Response)=>{

    return res.json({message:'Hello World'})
})

Routers.post('/task',taskController.create)
Routers.get('/list',taskController.getAll)
Routers.get('/list/:id',taskController.getById)
Routers.put('/task/:id',taskController.update)
Routers.delete('/task/:id',taskController.destroy)


export {Routers}