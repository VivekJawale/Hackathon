import mongoose from "mongoose"
const main =async()=>{
    await mongoose.connect("mongodb+srv://admin:admin123@cluster0.de8kihl.mongodb.net/?retryWrites=true&w=majority")
console.log("Database Connected")
}
export default main;