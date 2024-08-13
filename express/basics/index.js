// const express = require("express");
// const app = express();
// const port = 3000;
// app.use(express.json());
// app.get("/", (req, res) => {
//   const name = req.query.name;
//   res.json({
//     msg: `hello ${name}`,
//   });
// });
// app.post("/signup", (req, res) => {
//   console.log("you hited teh route");
//   res.send("hello there");
// });
// app.listen(port, () => {
//   console.log(`Example app listening on port  ${port}`);
// });
import express from "express";
// const express = require("express");
const app = express();
const port = 3000;
import bodyparser from "body-parser";
app.use(express.json());
// app.use(bodyparser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/route", (req, res) => {
  // console.log(req.headers["Authorization"]);

  console.log(req.body);
  res.send(req.body);
  // res.send("hello");
});
app.get("/routeone", (req, res) => {
  const person = req.body.person;
  console.log(req.body);
  res.send(person);
});
app.post("/getone", (req, res) => {
  res.send("we are in the range");
  console.log(req.body);
});
app.post("/gettodo", (req, res) => {
  // const title = req.body.title;
  // const dis = req.body.dis;
  const todo = req.body.todo;
  const title = todo.title;
  const dis = todo.dis;
  res.json({
    title,
    dis,
  });

  console.log(title);
});
// yes jiti gya
app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});
