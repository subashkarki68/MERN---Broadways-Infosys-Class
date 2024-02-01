const obj = {
    name: "subash",
    password: "1234",
    email: "subashkarki68@gmail.com"
};

//Spread Operator
const { password, ...rest} = obj; //Object Destructuring
console.log({rest});