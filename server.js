require("./config/config")
const express= require("express")
const Router=require("./rouet/route")
 const app=express()
 app.use(express.json())
 app.use("/api",Router)
 const PORT= process.env.PORT
 app.listen(PORT,()=>{
    console.log("sever is on")
 })