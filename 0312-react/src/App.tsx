import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapContainer } from "react-leaflet";
import { Input } from "./components/ui/input";
import CountrySelector from "./CountrySelector";
import { Football, MyFootball } from "./Football";
import Header from "./Header";
import { Home } from "./Home";
import { List } from "./List";
import { ForgotPassword, Login } from "./Login";
import Pokemons from "./Pokemons";
import State from "./State";
import UseEffect from "./UseEffect";
import WeatherApp from "./WeatherApp";
import WordCount from "./WordCount";
import UseMemo from "./useMemo/UseMemo";
import CallbackParent from "./useCallback/CallbackParent";
import Currency from "./practise/Currency";

const data = [
  { id: 1, title: "apple" },
  { id: 2, title: "ball" },
  { id: 3, title: "cat" },
];

const App = () => {
  return (
    <>
      <Header />
      <div className='flex gap-2 border-red-100 justify-evenly '>
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
              Word Count - Write a react component that counts the number of
              words used in the content section.
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
      <div className='flex gap-2 border-red-100 justify-evenly'>
        <Card className='flex flex-col justify-between mt-5'>
          <CardHeader>
            <CardTitle>Day 4 - Pokemon App</CardTitle>
            <CardDescription>using useEffect</CardDescription>
          </CardHeader>
          <CardContent>
            <Pokemons />
          </CardContent>
        </Card>
      </div>
      <div className='flex gap-2 border-red-100 justify-evenly'>
        <Card className='flex flex-col justify-between mt-5'>
          <CardHeader>
            <CardTitle>Day 5 - HomeWork</CardTitle>
            <CardDescription>Weather Api</CardDescription>
          </CardHeader>
          <CardContent className=' h-[100vh] w-[100vw]'>
            <Input placeholder='Enter city' className='mb-20 w-[50%]' />
            <MapContainer
              center={[27.505, 70.09]}
              scrollWheelZoom={false}
              className='h-full w-full'
              zoom={8}
              minZoom={3}
              maxZoom={19}
            >
              <WeatherApp />
            </MapContainer>
          </CardContent>
        </Card>
      </div>
      <div className='flex gap-2 border-red-100 justify-evenly mt-40 mb-40'>
        <Card className='flex flex-col justify-between mt-5'>
          <CardHeader>
            <CardTitle>Day 8 - Homework</CardTitle>
            <CardDescription>
              <img src='/hw/reactday8hw.png' alt='' />
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className='flex flex-col justify-between mt-5'>
          <CardHeader>
            <CardTitle>Day 9 - useMemo and useCallback</CardTitle>
            <CardDescription>
              <UseMemo />
              <h2 className='text-4xl'>useCallback</h2>
              <CallbackParent />
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
        <Card className='flex flex-col justify-between mt-5'>
          <CardHeader>
            <CardTitle>Day 10 - Practise</CardTitle>
            <CardDescription>
              <h2 className='text-4xl'>Select All</h2>
            </CardDescription>
          </CardHeader>
          <CardContent>{/* <SelectAll /> */}</CardContent>
        </Card>
      </div>
      <div className='flex gap-2 border-red-100 justify-evenly mt-40 mb-40'>
        <Card className='flex flex-col justify-between mt-5'>
          <CardHeader>
            <CardTitle>Day 10 - currency converter</CardTitle>
            <CardDescription>
              <img src='/currency.png' alt='' />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Currency />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default App;
