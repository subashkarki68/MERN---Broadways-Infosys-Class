import { useEffect, useState } from "react";

const Clock = () => {
  const [clockTime, setClockTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const _ = new Date();
      setClockTime({
        hours: _.getHours() % 12 || 12,
        minutes: _.getMinutes(),
        seconds: _.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <span className='text-xl font-semibold tracking-widest'>
        {clockTime.hours < 10 ? "0" + clockTime.hours : clockTime.hours}:
        {clockTime.minutes < 10 ? "0" + clockTime.minutes : clockTime.minutes}:
        {clockTime.seconds < 10 ? "0" + clockTime.seconds : clockTime.seconds}
      </span>
      <span className='text-xl font-semibold'>
        {clockTime.hours >= 12 ? "PM" : "AM"}
      </span>
    </>
  );
};

export default Clock;
