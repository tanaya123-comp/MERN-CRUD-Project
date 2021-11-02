const express=require('express')
const router=express.Router()

require('../db/conn')

const User=require('../model/userSchema')

router.get('/',(req,res)=>{
    res.send('Hello world')
})

router.post('/register',(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name||!email||!phone||!work||!password||!cpassword)
    {
       return res.status(422).json({error:'Plz Fill All the fields'})
    }

    User.findOne({email:email}).then((userExists)=>{
        if(userExists){
            return res.status(422).json({error:'User Already Exists'})
        }

        const user=new User({name,email,phone,work,password,cpassword})

        user.save().then(()=>{
             return res.status(201).json({error:'User Registered Successfully'})
        }).catch((err)=>{
            return res.status(500).json({error:'Fail Register'})
        }).catch((err)=>{
            console.log(err);
        })

    })
})

module.exports=router;