"use client"

import {useSearchParams} from "next/navigation";
import {QUARY_SEARCH} from "@/app/types/common";
import CounterDown from "@/app/lib/CounterDown";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";


const Countdown = () => {
  const searchParams = useSearchParams();

  const date = searchParams.get(QUARY_SEARCH.date) || new Date(new Date().getMilliseconds() + 1500 * 60);
  const theme = searchParams.get(QUARY_SEARCH.theme) || "defaultTheme";
  const font = searchParams.get(QUARY_SEARCH.font) || "defaultFont";
  const eventName = searchParams.get(QUARY_SEARCH.name) || "Hello World!";

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
    <div className="flex flex-row items-center justify-center h-screen prose-max">
      <div className="text-center prose">
        <h1 className="text-5xl font-bold">{eventName}</h1>
        <div className="p-12">
          <motion.div className="py-6"
                      initial={{opacity: 0, y: 50}} // Initial position and opacity
                      animate={{opacity: 1, y: 0}} // Animation to fully visible and original position
                      transition={{duration: 0.5, delay: 0.2}} // Animation duration and delay
          >
            <CounterDown days={days} hours={hours} minutes={minutes} seconds={seconds}/>

          </motion.div>
        </div>
      </div>
    </div>
  )
    ;
}

export default Countdown;