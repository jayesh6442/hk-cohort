import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todoModel = mongoose.model("todos", todoSchema);

export { todoModel };
