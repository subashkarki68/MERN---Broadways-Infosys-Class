//write a js funtion that return decimal value

const numeral = [1, 2, 3];
//result [1.00, 2.00, 3.00]

const addDecimal = (arr) => arr.map((n) => n.toFixed(2));

console.log(addDecimal(numeral));
