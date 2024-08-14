import express from "express";
import mongoose from "mongoose";
import { userModel, courseModel } from "./model.js";

// jargons
// cluster
// database
// table
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/jayesh");
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
connectDB();

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/user", async (req, res) => {
  userModel
    .create({
      username: req.body.username,
      password: req.body.password,
    })
    .then(() => {
      res.send("created the user  ");
    });
});

app.post("/create", async (req, res) => {
  const coursename = req.body.cousrename;
  const courseprice = req.body.courseprice;

  let course;
  course = new courseModel({
    coursename,
    courseprice,
  });
  course.save();
  res.send("course created");
});

app.listen(port);
