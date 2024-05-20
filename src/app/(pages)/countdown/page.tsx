"use client"

import {useSearchParams} from "next/navigation";
import {QUARY_SEARCH} from "@/app/types/common";
import CounterDown from "@/app/lib/CounterDown";
import {useEffect, useState} from "react";


const Countdown = () => {
  const searchParams = useSearchParams()
  const defaultTheme = ""
  const defaultFont = ""

  //TODO EM
  const date = searchParams.get(QUARY_SEARCH.date) || new Date("Mon May 22 2024 08:22:01")
  const theme = searchParams.get(QUARY_SEARCH.theme) || defaultTheme
  const font = searchParams.get(QUARY_SEARCH.font) || defaultFont
  const name = searchParams.get(QUARY_SEARCH.name) || ""

  const targetDate = new Date(date).getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = targetDate - Date.now();
      if (newTimeLeft <= 0) {
        clearInterval(intervalId);
        setTimeLeft(0);
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const calculateTimeUnits = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

    return {days, hours, minutes, seconds};
  };

  const {days, hours, minutes, seconds} = calculateTimeUnits(timeLeft);

  return (
    <>
      <p>Search: {name}</p>
      <CounterDown days={days} hours={hours} minutes={minutes} seconds={seconds}/>
    </>
  );
}

export default Countdown;