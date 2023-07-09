const express= require("express")
 const  Router=express.Router()
 const{singin,signi}=require("../controller/control")
  Router.post("/post",singin)
  Router.post("/create",signi)
  

  module.exports=Router