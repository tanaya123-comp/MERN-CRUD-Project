const express=require('express')
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv')

dotenv.config({path:'./config.env'})
require('./db/conn')

const PORT=process.env.PORT

//accept the json data
app.use(express.json());

//we link the router files to make our routing easy
app.use(require('./router/auth'))



const middleware=(req,res,next)=>{
    console.log('Middleware');
    next();
}



app.get('/about',middleware,(req,res)=>{
    res.send('About')
})

app.get('/contact',middleware,(req,res)=>{
    res.send('Contact Page')
})

app.listen(PORT,()=>{
    console.log('server is running at port 3000')
})

