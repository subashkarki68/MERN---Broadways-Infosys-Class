import React, { createContext, useContext } from "react";

const LoginContext = createContext("Subash");

export default function UseContex() {
  return (
    <div>
      <LoginContext.Provider value='Karki'>
        <Comp1 />
      </LoginContext.Provider>
    </div>
  );
}

const Comp1 = () => {
  return (
    <div>
      <Comp2 />
    </div>
  );
};

const Comp2 = () => {
  return (
    <div>
      <Comp3 />
    </div>
  );
};

const Comp3 = () => {
  const login = useContext(LoginContext); // Accessing context within Comp3
  return <div>hi, {login}</div>;
};
