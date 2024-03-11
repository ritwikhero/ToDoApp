const zod = require("zod");
/*
    {
        title : String
        description : String
    }
    {
        id : String
    }
    we'll use zod for input validation
 */

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})
const updateTodo = zod.object({
    id : zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}