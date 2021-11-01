const express=require('express')
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv')

const DB='mongodb+srv://tanaya:tanaya@cluster0.kiajp.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection successful`)
}).catch((err)=>console.log(err));

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

app.listen(3000,()=>{
    console.log('server is running at port 3000')
})

