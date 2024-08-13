// middlewares authentication global catch and zod
import express from "express";
const app = express();
const port = 3000;
import {
  kidneyCheck,
  userValidation,
  ticketCheck,
  calculateRequest,
  checkAvarageTime,
} from "./middlewares/middlewares.js";

// there is two type of the middleware is uesr login and the input that user sent us
// app.use(calculateRequest, checkAvarageTime, express.json());

app.get("/", (req, res) => {
  res.send("hello you are in the route");
});

// Global catch middleware

app.use((err, req, res, next) => {
  if (err) {
    console.log("we are in the error");
    res.json({
      message: "internal error",
      error: err.message,
    });
  }
  next();
});

app.listen(port);
