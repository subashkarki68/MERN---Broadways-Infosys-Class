import { useState } from "react";
import { Button } from "./components/ui/button";

const State = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState({
    text: "red",
    backgroundColor: "pink",
  });
  return (
    <>
      <h2 className='text-2xl'>{count}</h2>
      <div className='flex gap-2'>
        <Button variant={"destructive"} onClick={() => setCount(count + 1)}>
          Increase Counter
        </Button>
        <Button variant={"secondary"} onClick={() => setCount(count - 1)}>
          Decrease Counter
        </Button>
        <Button variant={"default"} onClick={() => setCount(0)}>
          Reset Counter
        </Button>
      </div>
      <h2 className='mt-5'>I am {color.backgroundColor} in color</h2>
      <Button
        variant={"ghost"}
        className={`bg-${color.backgroundColor}-600`}
        onClick={() => {
          setColor((prevValue) => {
            const newBgColor =
              prevValue.backgroundColor === "pink" ? "gray" : "pink";
            return { ...prevValue, backgroundColor: newBgColor };
          });
        }}
      >
        Toggle my color
      </Button>
    </>
  );
};

export default State;
