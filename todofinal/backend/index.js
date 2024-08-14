import express from "express";
import mongoose from "mongoose";
import { connectDB } from "./db.js";
import { todoModel } from "./model.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config({});
import { todoSchemaValidation, updateTodo } from "./typs.js";
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;

app.get("/todos", async (req, res) => {
  const todos = await todoModel.find({});
  res.status(200).json({
    todos,
  });
});

app.post("/create-todo", async (req, res) => {
  const payLoad = req.body;
  const safePayLoad = todoSchemaValidation.safeParse(payLoad);
  if (!safePayLoad.success) {
    res.status(400).json({
      msg: "wrong inputs",
    });
    return;
  }

  await todoModel.create({
    title: safePayLoad.data.title,
    description: safePayLoad.data.description,
    completed: false,
  });
  res.status(201).json({
    msg: "todo created",
  });
});

app.put("/complete", async (req, res) => {
  const updataPayLoad = req.body;
  const safeUpdataPayLoad = updateTodo.safeParse(updataPayLoad);
  if (!safeUpdataPayLoad.success) {
    res.status(400).json({
      msg: "wrong inputs",
    });
    return;
  }
  await todoModel.updateOne(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.status(411).json({
    msg: "updated",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
