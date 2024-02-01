//Write a JS function that create a sum mof numbers from 1 to 10
// eg: [1,2,3,4,5,6,7,8,9,10] => 55

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
const sumArray = (array) => array.reduce((acc, curr) => acc + curr, 0);
//   array.forEach((e) => (sum += e));
//   return sum;

console.log(sumArray(arr));
