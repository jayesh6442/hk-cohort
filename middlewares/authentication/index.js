import express from "express";
const app = express();
const port = 3000;
import { name } from "./auth.js";

app.get("/", (req, res) => {
  const fname = req.query.fname;
  const finalName = name.safeParse(fname);
  res.send(finalName);
});

app.listen(port, () => {
  console.log(`Example app listening on port  ${port}`);
});



