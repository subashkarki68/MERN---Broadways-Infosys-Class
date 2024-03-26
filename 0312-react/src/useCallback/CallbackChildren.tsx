import { Button } from "@/components/ui/button";
import { memo } from "react";

function CallbackChildren({
  salary,
  increaseSalary,
}: {
  salary: number;
  increaseSalary: () => void;
}) {
  console.log("i am children");
  return (
    <div>
      Salary: {salary}
      <Button onClick={increaseSalary}>Increase</Button>
    </div>
  );
}

export default memo(CallbackChildren);
