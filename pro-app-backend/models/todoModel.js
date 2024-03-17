import mongoose from "mongoose";

const todoScheme = new mongoose.Schema({
  taskTitle: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  todoStatus: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const Todo = mongoose.model("Todo", todoScheme);
export default Todo;
