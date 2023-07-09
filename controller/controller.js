onst jwt= require("jsonwebtoken")
const bcrypt= require("bcrypt")
const usermodel = require("../model/model")

exports.singin= async(req,res)=>{
    try { const{name,email,password}=req.body
        // fist we first check if email exist
        const check= await usermodel.findOne({email})
        if(check){
            res.status(400).json({
                message:"email exists"
            })
        }else{
            
            // now we hash the password
            const saltedRound=10;
            const hashedpassword= await bcrypt.hash(password,saltedRound)
            // now we save the datas destructurd from req.body
            const data={
                name,
                email,
                password:hashedpassword

            }
            //now we save
            const user= await usermodel.create(data)
            res.status(201).json({
                message:"succsesfullycreated",
                data:user
            })
        }
    } catch (error) {
        
        res.status(500).json({
            message:error.message
        })
    }
}



exports .signi= async(req,res)=>{
    try {
        const{email,password}=req.body
   const user= await usermodel.findOne({email})
   if(!user){
    res.status(404).json({
        message:"user with this email: is not found"
    })

   } const ispassword= await bcrypt.compare(password,user.password)
   if(!ispassword){
    res.status(400).json({
        message:"fuck you nigger this is derm incorrect"
    })

   }else{
    const token= await gentoken(user);
    res.status(200).json({
        message:"signin succcsesful",
        data:token
    })
   }
    } catch (error) {
        es.status(500).json({
            message:error.message
            
        })
    }
}

const gentoken= async(user)=>{
    const token= await jwt.sign({
        name:user.name,
        email:user.email,
        password:user.password

    },process.env.JWT_TOKEN)
return token
}