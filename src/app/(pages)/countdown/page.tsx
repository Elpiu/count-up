"use client"

import {useRouter, useSearchParams} from "next/navigation";
import {QUARY_SEARCH} from "@/app/types/common";
import CounterDown from "@/app/lib/CounterDown";
import React, {Suspense, useEffect, useState} from "react";
import {motion} from "framer-motion";
import toast from "react-hot-toast";


const CountdownContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

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

  const notifyInfo = () => {
    // Copy the current URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast(
        <div className="">
          <h1 className="text-lg">📝️ Copied!</h1>
        </div>
      );
    });
  };


  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <button
          className="btn btn-ghost text-xl"
          onClick={() => router.push("/")}
        >Count Up
        </button>
      </div>
      <div className="flex flex-row items-center justify-center h-screen prose-max">
        <div
          className="text-center prose cursor-pointer tooltip"
          onClick={() => notifyInfo()}
          data-tip="Click to copy!"
        >
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
    </div>
  )
    ;
}

const Countdown = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CountdownContent/>
    </Suspense>
  );
};

export default Countdown;