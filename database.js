//import dependencies
/*import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"


const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Databae is connected successfully.");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error)=>console.log(err));

//declare variable type
const userSchema = new mongoose.Schema({
    score: Number,
    username: String,
    password: String,
})

const userModel = mongoose.model("users", userSchema);

app.get("/users", async(req, res)=>{
    const userData = await userModel.find();
    res.json(userData);
})*/