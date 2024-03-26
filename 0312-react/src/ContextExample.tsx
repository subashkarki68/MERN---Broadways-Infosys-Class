import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const LoginContext = createContext("");

export default function ContextExample() {
  const [name, setName] = useState("Anonymous");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("https://dummyjson.com/users/1");
      setName(`${data.firstName} ${data.lastName} ${data.maidenName}`);
    };
    fetchData();
  }, []);
  return (
    <div>
      <LoginContext.Provider value={name}>
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
  const name = useContext(LoginContext); // Accessing context within Comp3
  return <div>name: {name}</div>;
};
