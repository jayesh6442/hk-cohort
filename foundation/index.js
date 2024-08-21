// console.log("we are in the range ");
//let a = "jayesh";
//console.log(a);
// console.log("hello world");
// let a = "savan jani";
// console.log(a);
// console.log("hello world");
// console.log(b);
// js is dynamic writen lang thats why we use the typescripte for the good development
// a =w "sarvaiya";
// console.log(a);
// js is single threded lang thats why the js is slow than other lang
// it can not run two process at the same time

// variables

// let a = 1;
// let b = "sarvaiya";
// let c = false;
// let d = [1, 2, 3, 4];
// let e = {
//   fname: "jayesh",
//   lname: "sarvaiya",
// };
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

// we have this kind of the data type in the js language

// let will let you change the data value

// on the other hand the const will never let you change the data value

// we also have var that is not used in the es6 because of the scope thing

// if else alows us the make the code run on the bassis of the condition

// let person = false;
// if (person) {
//   console.log("we are in the if ");
// } else {
//   console.log("we are in the else case");
// }

// this is for loop for the basic
// let ans = 0;
// for (let i = 1; i < 101; i++) {
//   ans += i;
// }
// console.log(ans);

// what we lerned so far let,var,const ,if ,else, for

// and here we go again
// This is While loop
// let a = 1;
// while (a < 10) {
//   console.log(a);
//   a += 1;
// }

// array and object and

// let arrOne = [1, 2, 3, 4, 5, 6, 7];

// console.log(arrOne);

// console.log(typeof arrOne);

// let personOne = [
//   {
//     fname: "jayesh",
//     lname: "sarvaiya",
//   },
// ];
// console.log(personOne);

// console.log(typeof personOne);

// console.log(arrOne.length);
// console.log(personOne.length);

// let even = [2, 4, 6, 8, 10];
// let even = [1, 3, 5, 7, 9];
// for (let i = 0; i < even.length; i++) {
//   if (even[i] % 2 == 0) {
//     console.log(even[i]);
//   } else {
//     console.log("not even");
//   }
// }

// this shit was for the logic buiding

// let personArr = [
//   { fname: "jayesh" },
//   { fname: "savan" },
//   { fname: "jasani" },
//   { fname: "viral" },
// ];

// for (let i = 0; i < personArr.length; i++) {
//   console.log(personArr[i]["fname"]);
// }

// for (let a in personArr) {
//   console.log(personArr[a]["fname"]);
// }

// console.log(personArr.length);
// let personarr = ["jayesh", "savan", "jasani", "shreya"];
// let genderarr = ["male", "male", "male", "female"];

// for (let i = 0; i < personarr.length; i++) {
//   if (genderarr[i]=="female") {
//     console.log(personarr[i]);
//   }
// }

// let person = {
//   fname: "jayesh",
//   gender: "male",
// };

// let personArr = [
//   {
//     fname: "jayesh",
//     gender: "male",
//   },
//   {
//     fname: "savan",
//     gender: "male",
//   },
//   {
//     fname: "jasani",
//     gender: "male",
//   },
//   {
//     fname: "some randome female",
//     gender: "female",
//   },
// ];

// for (let i = 0; i < personArr.length; i++) {
//   console.log(personArr[i]["gender"]);
// }

// Function

// function jayesh() {
//   console.log("we are in the jayesh funciton");
// }
// jayesh();
//this is function named jayesh
// let testUer = {
//   fname: "jayesh",
//   lname: "sarvaiya",
//   degree: [
//     {
//       board: "ssc",
//       type: "10th",
//     },
//     {
//       board: "gtu",
//       type: "diploma",
//     },
//     {
//       board: "git",
//       type: "btech",
//     },
//   ],
// };

// // console.log(
// //   testUer["degree"].forEach((value) => {
// //     console.log(value["type"]);
// //   })
// // );

// console.log(testUer["degree"][0]["board"]);

// function sum(a, b) {
//   let sum = a + b;
//   return sum;
// }

// let a = sum(1, 2);
// console.log(a);

// setInterval(() => {
//   console.log("jayesh");
// }, 3000);
// let a = 0;
// for (let i = 0; i < 10000000000000000; i++) {
//   a += i;
// } => bouty code

// function take argument as input called callback

// let a = function () {
//   return `hello`;
// };
// let b = a();
// console.log(b);

// function jayesh(fn) {
//   let a = 4;
//   let b = 4;
//   let sum = a + b;
//   fn(sum);
// }

// function printValue(data) {
//   console.log(data);
// }

// jayesh(printValue);
// this is the best ex of the callback in the js

// function sum(a, b, fntocall) {
//   let result = a + b;
//   fntocall(result);
// }
// function printValue(data) {
//   console.log(data);
// }
// sum(5, 4, printValue);
