import {Request,Response} from 'express'
import { Task } from '../models/Task';

interface ITask {
    id:string;
    task:string;
    check:boolean;
    created_at?:string;
}

interface IRequestCreate{
    task:string;
    check:boolean;
}

class TaskController {

//=========================================================================//
    async getAll(req:Request,res:Response){
        try {
            const tasksList:ITask[] = await Task.find()
            if (tasksList.length > 0) {
                return res.json(tasksList)
            }
            return res.json({message:"Not Content task! Please create task"})
        } catch (error) {
            return res.status(400).json({error:"Invalid!"})
        }  
    }
//=========================================================================//
    async create(req:Request,res:Response){
        const {task,check}:IRequestCreate = req.body
        
        if (task && check) {
            try {
                const createTask = await Task.create({task,check})
                return res.json(createTask);
            } catch (error) {
                return res.status(400).json({error:"Invalid!"})
            }
        }
        return res.status(400).json({error:"Invalid! Params Send"})
    }
//=========================================================================//
    async getById(req:Request,res:Response){
        const {id} = req.params

        if(id){
            try {
                const task = await Task.findOne({_id: id})
                if (task) {
                    return res.json(task)
                }
           
            } catch (error) {
                return res.status(400).json({error:"Invalid!"})
            }
        }

        return res.status(400).json({error:"Invalid! Params Send"})
    }

//=========================================================================//
    async update(req:Request,res:Response){
        const {task,check}:IRequestCreate = req.body
        const {id} = req.params
        
        if (id && check && task) {
            
            try {
                const taskExists = await Task.findById({_id:id})
                if (taskExists) {
                    await Task.updateOne({_id:id},{
                        task,check
                    })
                    return res.send();
                }
            } catch (error) {
                return res.status(400).json({error:"Invalid!"})
            }
        }

        return res.status(400).json({error:"Invalid! Params Send"})
    }
//=========================================================================//
    async destroy(req:Request,res:Response){
        const {id} = req.params
        if (id) {
            try {
                const taskExists = await Task.findById({_id:id})
                if (taskExists) {
                    await Task.deleteOne({_id:id})
                    return res.send();
                }
            } catch (error) {
                return res.status(400).json({error:"Invalid!"})
            }
        }
        return res.status(400).json({error:"Invalid! Params Send"})
    }
//=========================================================================//
}

export {TaskController}