import { Button } from "@/components/ui/button";
import React, { useCallback, useState } from "react";
import CallbackChildren from "./CallbackChildren";

function CallbackParent() {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [salary, setSalary] = useState(1000);

  const increaseSalary = useCallback(() => {
    setSalary(salary + 1500);
  }, [salary]);
  return (
    <div>
      Date: {time}
      <Button onClick={() => setTime(new Date().toLocaleString())}>Time</Button>
      <CallbackChildren salary={salary} increaseSalary={increaseSalary} />
      <img src='/notes/useCallbackNote.png' alt='' />
    </div>
  );
}

export default CallbackParent;
