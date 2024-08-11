// const jwt = require("jsonwebtoken");

// const myPass = "jayesh";

// const person = {
//   name: "jaeysh",
//   age: 23,
// };

// const token = jwt.sign(person, myPass);

// console.log(token);

// // console.log(
// //   jwt.verify(
// //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFleXNoIiwiYWdlIjoyMywiaWF0IjoxNzIzMjY4MDU2fQ.T5RwJ6qXWTxhVsgpmTa36uQrvOXg0A3rjeOxTt-mXV0",
// //     myPass
// //   )
// // );

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/about", (req, res) => {
//   res.send("welcome to the route");
// });

// app.get("/check",(req,res)=>{
//   const name = req.query.name;
//   res.send(`${name}`)
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port  ${port}`);
// });

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();
app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
  {
    username: "jayesh",
    password: "jayeshsarvaiya",
    name: "jayesh",
  },
];

function userExists(username, password) {
  userEx = false;

  ALL_USERS.forEach((user) => {
    if (username == user.username && password == user.password) {
      userEx = true;
    }
  });
  return userEx;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;
  // return a list of users other than this username
  res.json({
    users: ALL_USERS.filter((valued) => {
      if (valued.username == username) {
        return false;
      } else {
        return true;
      }
    }),
  });
});

const port = 3000;
app.listen(port);
