//basic express boiler plate code with APIs and middlewares
const express = require('express');
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
});
app.get("/todos", function(req,res){

});
app.post("/completed", function(req,res){

});


const port = app.listen(3000);
console.log(`port started on ${port}`);