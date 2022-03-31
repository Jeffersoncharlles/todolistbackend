import mongoose from "mongoose";

const connectDB = async ()=>{
    await mongoose.connect(
        "mongodb+srv://root:admin@todolist.89xht.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
           
        }
    )
        .then(()=>console.log("Connect: mongoDB"))
        .catch((error)=>console.log(error))
}

export {connectDB}