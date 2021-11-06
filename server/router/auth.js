const express=require('express')
const router=express.Router()

require('../db/conn')

const User=require('../model/userSchema')

router.get('/',(req,res)=>{
    res.send('Hello world')
})

//using promises
// router.post('/register',(req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
//     if(!name||!email||!phone||!work||!password||!cpassword)
//     {
//        return res.status(422).json({error:'Plz Fill All the fields'})
//     }

//     User.findOne({email:email}).then((userExists)=>{
//         if(userExists){
//             return res.status(422).json({error:'User Already Exists'})
//         }

//         const user=new User({name,email,phone,work,password,cpassword})

//         user.save().then(()=>{
//              return res.status(201).json({error:'User Registered Successfully'})
//         }).catch((err)=>{
//             return res.status(500).json({error:'Fail Register'})
//         }).catch((err)=>{
//             console.log(err);
//         })

//     })
// })

//using async - await
router.post('/register', async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name||!email||!phone||!work||!password||!cpassword)
    {
       return res.status(422).json({error:'Plz Fill All the fields'})
    }

    try{

        const userExists=await User.findOne({email:email});

        if(userExists){
            return res.status(422).json({error:'User Already Exists'})
        }else if(password!=cpassword){
            return res.status(422).json({error:'Password do not match'})
        }


        const user=new User({name,email,phone,work,password,cpassword})
        
        await user.save()

        res.status(201).json({error:'User Registered Successfully'})

    }catch(err){
        console.log(err);
    }

})

router.post('/signin',async (req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email || !password )
        {
            return res.status(422).json({error:'Plz Fill the field properly'})
        }

        const userLogin=await User.findOne({email:email});

        if(userLogin)
        {
            return res.status(201).json({message:'User is  present'})
        }
        else{
            return res.status(422).json({error:'User is not present'})
        }



    }catch(err){
        console.log(err);
    }

})

module.exports=router;