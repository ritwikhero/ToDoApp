/*
    title : String.
    description : String,
    Completed : boolean
*/

const mongoose = require("mongoose");

// mongodb+srv://ritwiksingh91099:Ritwik%409@cluster0.abno3ce.mongodb.net/
mongoose.connect("mongodb+srv://ritwiksingh91099:Ritwik%409@cluster0.abno3ce.mongodb.net/todoApp");
const toDoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
});

const todo = mongoose.model("todos",toDoSchema);
module.exports = {
    todo,
}