let prod = {
  name: "headphones",
  price: 1002,
  discount: "10%",
};

const calculateDis = (product) => {
  let result = "";
  if (Object.hasOwn(product, "discount")) {
    console.log("Already Discounted");
  } else {
    delete product.discount;
    const discountPercent = product.price > 100 ? 10 : 7;
    product.discount = `${discountPercent}%`;
    if (product.price > 100) {
      product.discount = "10%";
      product.price = product.price - (discountPercent / 100) * product.price;
    } else {
      product.discount = "7%";
      product.price = product.price - (discountPercent / 100) * product.price;
    }
  }
  return product;
};

console.log(calculateDis(prod));
