/*
 * Schema to be used
todo{
 title : String,
 description: String,
 isCompleted : Boolean
}
 */

// imported mongoose
// let mongoose = require("mongoose");
import mongoose from "mongoose";

// connecting
mongoose.connect("mongodb+srv://prathyushwebdev:user1%40appCreator@cluster0.dqpzyqe.mongodb.net/")

let todoSchema = mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

let todo = mongoose.model("todos", todoSchema);

export { todo };
