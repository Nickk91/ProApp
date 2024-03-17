import mongoose from "mongoose";

const todoScheme = new mongoose.Schema({
  taskTitle: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 30,
  },
  status: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const todo = mongooose.model("Todo", todoScheme);
