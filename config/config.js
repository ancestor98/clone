require("dotenv").config()
const mongoose= require("mongoose")

const url=process.env.DB_DATABASE
mongoose.connect(url).then(()=>{
    console.log("connected to db")
}).catch((e)=>{
    console.log(e.message)
})