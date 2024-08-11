import express from "express";
import { connectDB } from "./data.js";
import { userModel } from "./models/user.js";
const app = express();
app.use(express.json());
const port = 3000;
connectDB();
app.get("/", async (req, res) => {
  const { username, password } = req.body;
  const user = new userModel({ username, password });
  await user.save();
  res.send("hello");
});
app.listen(port);
