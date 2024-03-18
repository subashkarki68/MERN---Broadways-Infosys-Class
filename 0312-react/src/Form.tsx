import React, { useRef, useState } from "react";
import { Form, FormField } from "./components/ui/form";
import { Input } from "./components/ui/input";

export function ControlledForm() {
  const [form, setForm] = useState({
    name: "",
    age: 0,
  });
  //   Form input value are controlled by state
  //   What are its advantages?
  //   1. Form option Selection
  //   2. Form on the fly validation
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      C Form
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          placeholder='Enter name'
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
        <label htmlFor='age'>Age:</label>
        <input
          type='number'
          placeholder='Enter Age'
          onChange={(e) =>
            setForm((prev) => {
              return { ...prev, age: +e.target.value };
            })
          }
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export function UnControlledForm() {
  //React useRef
  //html id
  //react ref
  //When to use?
  const formRef = useRef(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formRef.current!);
    //send that form to axios or fetch
    console.log(formData);
  };
  return (
    <div>
      U Form
      <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <label>Name</label>
        <input placeholder='Name' name='name' />
        <label>Age</label>
        <input placeholder='Age' name='age' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
