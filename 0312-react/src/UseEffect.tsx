import React, { useEffect, useState } from "react";

function UseEffect() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  //No dependency
  useEffect(() => {
    setTimeout(() => {
      setCounter((c) => c + 1);
    }, 1000);
  });
  //With Empty Dependency
  useEffect(() => {
    setTimeout(() => {
      setCounter2((c) => c + 1);
    }, 1000);
  }, []);
  //With Dependency
  useEffect(() => {
    setTimeout(() => {
      setCounter3((c) => c + 1);
    }, 1000);
  }, [counter]);
  return (
    <div>
      <p>No dependency</p>
      <p>{counter}</p>
      <p>With Empty Dependency</p>
      <p>{counter2}</p>
      <p>With Dependency</p>
      <p>{counter3}</p>
    </div>
  );
}

export default UseEffect;
