import express from "express";
const app = express();
const port = 3000;
import jwt from 'jsonwebtoken'


app.get("/", (req, res) => {
  
  res.send("hello");

});

app.listen(port);






