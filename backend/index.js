//basic express boiler plate code with APIs and middlewares
const express = require('express');
const {ceateTodo, updateTodo} = require("./types");
const app = express();

app.use(express.json())
/*
    body  {
        title : String
        description : String
    }

    we'll use zod for input validation
 */
app.post("/todo", function(req,res){
    const cratePayLoad = req.body;
    const parsedPayLoad = ceateTodo.safeParse(createPayload);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg : "You sent wrong inputs",
        })
        return;
    }
    //put in mongoDB

});
app.get("/todos", function(req,res){

});
app.post("/completed", function(req,res){
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad){
        res.status(411).json({
            msg : "You sent wrong inputs"
        })
        return;
    }
    //update in mongo

});


const port = app.listen(3000);
console.log(`port started on ${port}`);