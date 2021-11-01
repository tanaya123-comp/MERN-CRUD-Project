const express=require('express')
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})
require('./db/conn')

const PORT=process.env.PORT



const middleware=(req,res,next)=>{
    console.log('Middleware');
    next();
}

app.get('/',middleware,(req,res)=>{
    res.send('Hello world')
})

app.get('/about',middleware,(req,res)=>{
    res.send('About')
})

app.get('/contact',middleware,(req,res)=>{
    res.send('Contact Page')
})

app.listen(PORT,()=>{
    console.log('server is running at port 3000')
})

