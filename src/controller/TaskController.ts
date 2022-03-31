import {Request,Response} from 'express'

class TaskController {

    async getAll(req:Request,res:Response){


        return res.json({ok:true})
    }

}

export {TaskController}