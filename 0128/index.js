//write a function to do multiplication table of 2

const upTo = 10;
const multiplyOf = 2;

for (let i = 1; i <= upTo; i++) {
  console.log(multiplyOf + "X" + i + "=" + multiplyOf * i);
}

//Write a function to find the area of rectangle
//L*B
const length = 2;
const breadth = 2;

const area = length * breadth;
console.log({ area });

//write a function javascript function to reverse a number. example: 1234, result:4321

const reverse = (number) => {
  number = String(number);
  let newNum = "";
  for (let i = number.length - 1; i >= 0; i--) {
    newNum += number[i];
  }
  return newNum;
};

const resu = reverse(987654321);
console.log(resu);

//write a JS function that creates a commaFormatter
//ex: x= 1000; expected out: 10,000
//ex y = 1000000; expected: 1,000,000
