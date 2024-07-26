// importing express
// let express = require('express')
import express from 'express'
// import { todo } from './db'
import { todo } from './db.js'
// importing modules form types.js
import { createTodo, updateToDo } from './types.js'
// importing cors
import cors from 'cors'

// creating instance of an express
let app = express()

// middle ware
app.use(express.json())
app.use(cors())

// Routes
app.post('/todo', async function (req, res) {
     let createtoDo = req.body;
     let createdToDo = createTodo.safeParse(createtoDo)
     if (!createdToDo.success) {
          res.status(411).json({
               msg : "You sent Wrong Inputs "
          })
          return;
     }
     // put it in mongodb
     try {
          await todo.create({
               title: createdToDo.data.title,
               description: createdToDo.data.description,
               isCompleted : false
          })
          res.json({
               msg :`Todo Created`
          })
     } catch (error) {
          res.json({
               msg : `Internal Error ${error}`
          })
     }
     
})

app.get('/todos', async (req, res) => {
     let todos = await todo.find();
     res.json({
          todos
     })
})

app.put('/completed', async (req,res) =>{
     let updatedToDO = req.body;
     let parsedTodo = updateToDo.safeParse(updatedToDO)
     if (!parsedTodo.success) {
          res.status(411).json({
               msg : "Not Completed"
          })
          return;
     }

     try {
          await todo.updateOne({
               _id : req.body.id
          }, {
               isCompleted: true
          })
          res.json({
               msg : `Your Todo is completed`
          })
     } catch (error) {
          res.json({
               error
          })
     }
})

// starting application
let port = 3000
app.listen(port, () => {
     console.log(`App Started At Port${port}`)
})