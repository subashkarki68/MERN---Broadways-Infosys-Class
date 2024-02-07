const { convert } = require("./library");
const {
  slugify,
  properCase,
  descGenerator,
  isEmail,
} = require("./modules/textParser");

const result = convert(5000);

const slug = slugify(" apple is tasty");
const prop = properCase("apple is tAsTy");
const desc = descGenerator(
  "Apple is tasty. Apple is tasty. Apple is tasty. Apple is tasty. Apple is tasty. Apple is tasty. Apple is tasty. "
);

const checkEmail = isEmail("subashkarki@gmail.com");

console.log(result, slug, prop, desc, checkEmail);
