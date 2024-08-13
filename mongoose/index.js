// import express from "express";
// const app = express();
// const port = 3000;
// app.use(express.json());
// import { connectDB } from "./db.js";
// import { userModel } from "./model.js";
// connectDB();

// let userone = new userModel({
//   username: "jayesh",
//   password: "jaeysh",
// });

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.post("/user", async (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   const newUser = await userModel({
//     username,
//     password,
//   }).save();
//   res.json({
//     msg: "created",
//   });
// });

// app.get("/userfind", async (req, res) => {
//   const user = req.body.user;
//   const findUsser = userModel.findOne(user);
//   res.json({
//     findUsser,
//   });
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port  ${port}`);
// });
