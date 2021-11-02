const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Hello world')
})

router.post('/register',(req,res)=>{
    res.send("Register Page")
})

module.exports=router;