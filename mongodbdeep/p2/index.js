import express from "express";
import { connectDB } from "./db.js";
const app = express();
const port = 3001;
connectDB();
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/about", (req, res) => {
  res.send("you are in the about route");
});

app.listen(port);
