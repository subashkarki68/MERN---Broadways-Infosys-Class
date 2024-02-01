//write a JS function that creates a commaFormatter
//ex: x= 1000; expected out: 10,000
//ex y = 1000000; expected: 1,000,000
const reverse = (number) => {
  number = String(number);
  let newNum = "";
  for (let i = number.length - 1; i >= 0; i--) {
    newNum += number[i];
  }
  return newNum;
};

const formatted = (num) => {
  const stringed = String(num);
  const length = stringed.length;
  let newN = "";
  let counter = 0;
  for (let i = length - 1; i >= 0; i--) {
    if (counter === 3) {
      newN += ",";
      counter = 0;
    }
    newN += stringed[i];
    counter++;
  }
  return newN;
};

const apple = reverse(formatted(1000000000));
console.log(apple);
