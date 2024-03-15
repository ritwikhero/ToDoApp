//basic express boiler plate code with APIs and middlewares
const express = require('express');
const {createTodo, updateTodo} = require("./types");
const { todo } = require('./db');
const app = express();

app.use(express.json())
/*
    body  {
        title : String
        description : String
    }

    we'll use zod for input validation
 */
app.post("/todo", async function(req,res){
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "You sent wrong inputs",
        })
        return;
    }
    //put in mongoDB

    await todo.create({
        title : createPayLoad.title,
        description : createPayLoad.description,
        completed : false,
    });

    res.json({
        msg : "Todo created"
    });

});
app.get("/todos", async function(req,res){
    const todos = todo.find();
    console.log(todos);
    res.json({
        todos,
    })
});
app.post("/completed", async function(req,res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return;
    }
    //update in mongo
    await todo.update({
        _id : req.body.id
    },{
        completed : true,
    });

    res.json({
        msg : "Marked as completed"
    })
});


app.listen(3000);
console.log(" server started ");