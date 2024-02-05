//Let food = ['Noodle', 'Pasta', 'Ice-cream];
//Let food = ['Fries', 'Ice-cream', 'Pizza'];
//Compare the 2 arrays and find common food if any.

let food1 = ["Noodle", "Pasta", "Ice-cream"];
let food2 = ["Fries", "Ice-cream", "Pizza"];

let commonFood = (f1, f2) => f1.filter((foodItem) => f2.includes(foodItem));

console.log(commonFood(food1, food2));
