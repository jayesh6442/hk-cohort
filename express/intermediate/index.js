// const express = require("express");
// const fs = require("fs");
// const app = express();
// const port = 3000;
// // function file() {
// //   fs.readFile("a.txt", "utf8", (err, data) => {
// //     console.log(data);
// //     return data;
// //   });
// // }
// function findSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// app.get("/", (req, res) => {
//   const sum = req.query.sum;
//   let ans = findSum(sum);
//   res.json({
//     ans,
//   });
// });
// app.get("/hii", (req, res) => {
//   res.send("we are in the route of the hiii");
//   console.log("point heted");
// });
// app.listen(port);

// app.get("/", (req, res) => {
//   res.send("we are in new server");
// });

// we have the status codes

// ### 1xx Informational
// - **100 Continue**: Continue sending the request body.
// - **101 Switching Protocols**: Protocols switched as requested.

// ### 2xx Success
// - **200 OK**: Request successful.
// - **201 Created**: Resource successfully created.
// - **202 Accepted**: Request accepted, processing pending.
// - **204 No Content**: Request successful, no content to send.

// ### 3xx Redirection
// - **301 Moved Permanently**: Resource moved to a new URL.
// - **302 Found**: Resource temporarily moved.
// - **304 Not Modified**: Cached version still valid.

// ### 4xx Client Errors
// - **400 Bad Request**: Malformed request syntax.
// - **401 Unauthorized**: Authentication required.
// - **403 Forbidden**: Request understood, but refused.
// - **404 Not Found**: Resource not found.
// - **405 Method Not Allowed**: HTTP method not supported.

// ### 5xx Server Errors
// - **500 Internal Server Error**: Generic server error.
// - **501 Not Implemented**: Server does not support the functionality required.
// - **502 Bad Gateway**: Invalid response from upstream server.
// - **503 Service Unavailable**: Server temporarily unavailable.
// - **504 Gateway Timeout**: Upstream server failed to respond in time.

// methods

// get
// post
// put
// delete
// my code ugly

// const express = require("express");
// const app = express();
// const port = 3000;
// app.use(express.json());
// let user = {
//   name: "john",
//   kidney: [
//     {
//       healty: false,
//     },
//     {
//       healty: true,
//     },
//     {
//       healty: false,
//     },
//     {
//       healty: true,
//     },
//     {
//       healty: true,
//     },
//     {
//       healty: true,
//     },
//   ],
// };

// app.get("/newroute", (req, res) => {
//   const kidneys = user.kidney;
//   const totalKidney = kidneys.length;
//   const numberOfHealtyKidney = user.kidney.filter(
//     (value) => value.healty
//   ).length;
//   const numberOfUnhealtyKidney = totalKidney - numberOfHealtyKidney;
//   res.json({
//     totalKidney,
//     numberOfHealtyKidney,
//     numberOfUnhealtyKidney,
//   });
// });

// app.post("/", (req, res) => {
//   const isHealty = req.body.isHealty;
//   user.kidney.push({
//     healty: isHealty,
//   });
//   res.send("done");
// });
// app.put("/", (req, res) => {
//   user.kidney.forEach((value) => {
//     if (value.healty == false) {
//       value.healty = true;
//     }
//   });
//   res.send("done");
// });
// app.delete("/", (req, res) => {
//   user.kidney.pop({
//     healty: false,
//   });
//   res.send("done");
// });

// app.listen(port);

// chat gpt code slighty good code

// const express = require("express");
// const app = express();
// const port = 3000;

// app.use(express.json());

// let user = {
//   name: "john",
//   kidney: [
//     { healthy: false },
//     { healthy: true },
//     { healthy: false },
//     { healthy: true },
//     { healthy: true },
//     { healthy: true },
//   ],
// };

// app.get("/kidney-status", (req, res) => {
//   const totalKidney = user.kidney.length;
//   const numberOfHealthyKidney = user.kidney.filter(
//     (kidney) => kidney.healthy
//   ).length;
//   const numberOfUnhealthyKidney = totalKidney - numberOfHealthyKidney;

//   res.json({
//     totalKidney,
//     numberOfHealthyKidney,
//     numberOfUnhealthyKidney,
//   });
// });

// app.post("/add-kidney", (req, res) => {
//   const isHealthy = req.body.isHealthy;

//   if (typeof isHealthy !== "boolean") {
//     return res.status(400).send("Invalid input for isHealthy");
//   }

//   user.kidney.push({ healthy: isHealthy });
//   res.send("Kidney added");
// });

// app.put("/heal-kidneys", (req, res) => {
//   user.kidney.forEach((kidney) => {
//     if (!kidney.healthy) {
//       kidney.healthy = true;
//     }
//   });

//   res.send("All unhealthy kidneys healed");
// });

// app.delete("/remove-last-kidney", (req, res) => {
//   if (user.kidney.length === 0) {
//     return res.status(400).send("No kidneys to remove");
//   }

//   user.kidney.pop();
//   res.send("Last kidney removed");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("done");
});

app.listen(port);
