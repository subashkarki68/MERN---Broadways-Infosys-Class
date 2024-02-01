//JS function that converts long text to ... format
//eg: "Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex eum pariatur sit repellendus ullam dicta itaque. Non magnam est vero. Autem sed totam corporis architecto quia placeat, molestiae at!"
// => "Hello, Lorem ipsum dolor sit amet..."

const longText =
  "Hello, Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ex eum pariatur sit repellendus ullam dicta itaque. Non magnam est vero. Autem sed totam corporis architecto quia placeat, molestiae at!";

const truncateLongText = (str, l) => str.slice(0, l) + "...";
console.log(truncateLongText(longText, 22));
