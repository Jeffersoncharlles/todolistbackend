import {Request,Response} from 'express'
import { Task } from '../models/Task';

interface IRequestCreate{
    task:string;
    check:boolean;
}

class TaskController {

    async getAll(req:Request,res:Response){
        try {
            const tasksList = await Task.find()

            return res.json(tasksList)
            
        } catch (error) {
            return res.status(400).json({error:"Invalid!"})
        }  
    }

    async create(req:Request,res:Response){
        const {task,check}:IRequestCreate = req.body

        if (task) {
            try {

                const createTask = await Task.create({task,check})

               return res.json(createTask);
            } catch (error) {
                return res.status(400).json({error:"Invalid!"})
            }
        }

        return res.status(400).json({error:"Invalid! Params Send"})
    }

}

export {TaskController}