import mongoose from "mongoose";
import { config } from "dotenv";
config()

const connectDb = (app) => {
    
    mongoose.set('strictQuery', false)
    console.log("connection started")

    mongoose.connect(process.env.MONGODB_URI).then(() => {
       app.listen(5000, console.log(`Server listening to 5000 🔥🔥`));
   }).catch(error=>console.log("There is an error", error))
}

export default connectDb
