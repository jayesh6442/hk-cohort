// map filter foreach

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8];

// arrOne.forEach((value) => {
//   console.log(value);
// });

// const newArr = arrOne.filter((value) => {
//   if (value <= 5) {
//     return value;
//   }
// });

// console.log(newArr);
function change(value) {
  return value * 10;
}
const newArrTwo = arrOne.map(change);
console.log(newArrTwo);
