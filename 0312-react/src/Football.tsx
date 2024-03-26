import { Button } from "./components/ui/button";

export const Football = () => {
  const shoot = () => {
    alert("Goallllllllllllll");
  };
  return (
    <Button variant={"destructive"} onClick={shoot}>
      Take a shot
    </Button>
  );
};

export const MyFootball = () => {
  const shoot = (arg: string) => {
    alert(arg);
  };
  return (
    <Button variant={"outline"} onMouseDown={() => shoot("Goal by Subas")}>
      Subash shoot ball
    </Button>
  );
};
