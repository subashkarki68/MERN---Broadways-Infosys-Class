//slug
//propercase
//description generator
//email validation

const slugify = (text) => text.toLowerCase().trim().replaceAll(" ", "-");

const properCase = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const descGenerator = (desc) => desc.slice(0, 15) + "...";

const isEmail = (email) => {
  const res = email.search(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  return res > -1;
};

module.exports = {
  slugify,
  properCase,
  descGenerator,
  isEmail,
};
