import mongoose,{} from "mongoose";

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    check:{
        type:Boolean,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})

const Task = mongoose.model("Task",taskSchema)

export {Task}