// let zod = require('zod')
import zod from 'zod'

/*
 * {
     title : String,
     discription : string
}
     {
     Id : string
}
 */

let createTodo = zod.object({
     title : zod.string(),
     description : zod.string(),
     id : zod.string().optional()
})

let updateToDo = zod.object({
     id : zod.string()
})

export {createTodo, updateToDo}