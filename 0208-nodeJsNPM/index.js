const toProperUpper = require("proper-upper-case");
const slugify = require("slugify");
const _ = require("lodash");
const isEmail = require("nice-is-email");

console.log(toProperUpper("apple is very tasty"));
console.log(
  slugify("welCoMe !@#$%^&*()^ to faceBook", {
    lower: true,
    strict: true,
    trim: true,
    remove: /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g,
  })
);

console.log(
  _.truncate(
    "This is a very very very very very very yvery loooooooooooong string",
    { length: 22 }
  )
);

console.log(_.isEmail("subashkarki@gm.com"));

console.log(isEmail("apple@aaa.co"));
