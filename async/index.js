const fs = require("fs");

// fs.readFile('a.txt','utf8',(err,data)=>{
//   if (err) {
//     console.log(err);
//   }
//   console.log(data);
// })

// function jayeshFun(cb) {
//   fs.readFile("a.txt", "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     cb(data);
//   });
// }
// function printData(data) {
//   console.log(data);
// }
// jayeshFun(printData);

// function jayeshpr() {
//   const p = new Promise((reject, resolve) => {
//     fs.readFile("a.txt", "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//         console.log("we are in the error block");
//       }
//       resolve(data);
//     });
//   });
//   return p;
// }
// function onDone(data) {
//   console.log(data);
// }

// let a = jayeshpr();
// console.log(a);
// jayeshpr().then(onDone).catch(onDone);
// this is the best way to do the asyc function
