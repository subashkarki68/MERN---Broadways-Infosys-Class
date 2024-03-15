import React from "react";
import ReactDOM from "react-dom/client";
import "../app/globals.css";
import { Home } from "./Home";
import { Login, ForgotPassword } from "./Login";
import { Football, MyFootball } from "./Football";
import { List } from "./List";
import State from "./State";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CountrySelector from "./CountrySelector";
import WordCount from "./WordCount";
import UseEffect from "./UseEffect";

const data = [
  { id: 1, title: "apple" },
  { id: 2, title: "ball" },
  { id: 3, title: "cat" },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div
      className='flex gap-2 border-red-100 justify-evenly'
      style={{ border: "2px solid red" }}
    >
      <Card className='flex flex-col justify-between'>
        <CardHeader>
          <CardTitle>Day 1</CardTitle>
          <CardDescription>Hello World and props</CardDescription>
        </CardHeader>
        <CardContent>
          <Home />
          <h3 className='font-bold underline'>Hello world!</h3>
          <Login email='subashkarki68@gmail.com' password='123' />
          <br />
          <ForgotPassword email='subashkarki68@email.com' />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card className='flex flex-col justify-between'>
        <CardHeader>
          <CardTitle>Day 2</CardTitle>
          <CardDescription>Events</CardDescription>
        </CardHeader>
        <CardContent>
          <Football />
          <MyFootball />
          <br />
          <List blogs={data} />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card className='flex flex-col justify-between'>
        <CardHeader>
          <CardTitle>Day 3</CardTitle>
          <CardDescription>Lifesycle and States</CardDescription>
        </CardHeader>
        <CardContent>
          <State />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
    <div className='flex gap-2 border-red-100 justify-evenly'>
      <Card className='flex flex-col justify-between mt-5'>
        <CardHeader>
          <CardTitle>Day 3 - classwork</CardTitle>
          <CardDescription>Country and City Selector</CardDescription>
        </CardHeader>
        <CardContent>
          <CountrySelector />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card className='flex flex-col justify-between mt-5'>
        <CardHeader>
          <CardTitle>Day 4 - classwork</CardTitle>
          <CardDescription>
            Word Count - Write a react component that counts the number of words
            used in the content section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WordCount />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card className='flex flex-col justify-between mt-5'>
        <CardHeader>
          <CardTitle>Day 4 - useEffect</CardTitle>
          <CardDescription>using useEffect</CardDescription>
        </CardHeader>
        <CardContent>
          <UseEffect />
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  </React.StrictMode>
);
