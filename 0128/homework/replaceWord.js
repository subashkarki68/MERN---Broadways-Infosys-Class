//Write JS function that replaces C++ to MERN
//eg: "Hello, Lorem ipsum dolor C++ sit amet consectetur adipisicing elit. C++ Repellat ex eum pariatur sit repellendus ullam dicta itaque. Non magnam est vero. Autem sed totam corporis architecto quia placeat, molestiae at!"
//eg: "Hello, Lorem ipsum dolor MERN sit amet consectetur adipisicing elit. MERN Repellat ex eum pariatur sit repellendus ullam dicta itaque. Non magnam est vero. Autem sed totam corporis architecto quia placeat, molestiae at!"

const sentence =
  "Hello, Lorem ipsum dolor C++ sit adipisicing elit. C++ Repellat ex eum pariatur sit.";

const replaceWord = (from, to) => sentence.replaceAll(from, to);

console.log(replaceWord("C++", "MERN"));
