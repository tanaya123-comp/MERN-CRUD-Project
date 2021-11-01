const express=require('express')
const app=express();
const mongoose=require('mongoose');

const DB='mongodb+srv://tanaya:9ANKRsvzddnjriwd@cluster0.kiajp.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log('connection successful')
}).catch((err)=>console.log('no connection'))

const middleware=(req,res,next)=>{
    console.log('Middleware');
    next();
}

app.get('/',(req,res)=>{
    res.send('Hello world')
})

app.get('/about',middleware,(req,res)=>{
    res.send('About')
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page')
})

app.listen(3000,()=>{
    console.log('server is running at port 3000')
})

