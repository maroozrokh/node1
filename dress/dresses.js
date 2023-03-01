 require('dotenv').config();
 const express = require('express');
 require('../db/db');
 const Dress = require('./dress');
 const app = express();
 const port = process.env.DRESS_PORT;
 app.use(express.json);
 app.post('/dress',(req,res)=>{
    const newDress = new Dress({...req.body});
    newDress.save().then(()=>{
        res.send("new dress added successfully!");

    }).catch((e)=>{
        res.status(500).send("Internal Server Error!");


    })
 });

 app.get('/dress',(req,res)=>{
    Dress.find().then((dress)=>{
        if(dress.length !== 0 ){
            res.json(dress);
        }else{
            res.status(404).send("dress not found!");
        }

    }).catch((e)=>{
        res.status(500).send("Internal Server Error!");

    })
 });
 app.get('/dress/:id',(req,res)=>{
    Dress.findById(req.params.id).then((dress)=>{
        if(dress){
            res.json(book);

        }else{
            res.status(404).send("Books not found");

        }
    }).catch((e)=>{
        res.status(500).send("Internal Server Error!");

    })
 });

 app.delete('/dress/:id',(req,res)=>{
    Dress.findOneAndRemove(req.params.id).then((dress)=>{
        if(dress){
            res.json("Book deleted Successfully!");


        }else{
            res.status(404).send("Book Not found!");

        }

    }).catch((e)=>{
        res.status(500).send("Internal Server Error!");

    })
 });

 app.listen(port,()=>{
    console.log(`Up and Running on port ${port}`);

 })

 