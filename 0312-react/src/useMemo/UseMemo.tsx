import { Button } from "@/components/ui/button";
import useFetch from "@/customHooks/useFetch";
import { useMemo, useState } from "react";

function UseMemo() {
  const [toggle, setToggle] = useState(false);
  const { products } = useFetch("https://dummyjson.com/products");

  //COmplex calculation
  const highRatedProduct = useMemo(() => {
    console.time("cCal");
    const product = products
      ?.sort((a: any, b: any) => a.rating - b.rating)
      .pop();
    console.timeEnd("cCal");
    return `${product?.title} ${product?.rating}`;
  }, [products]);
  return (
    <>
      {highRatedProduct}
      <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
      {toggle && <span>Toggle</span>}
    </>
  );
}

export default UseMemo;
