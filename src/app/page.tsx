"use client"
import {motion} from "framer-motion"
import React from "react";
import {StepperCustom} from "@/app/components/stepper";

export default function Home() {
  return (
    <main>
    <div className="flex flex-row items-center justify-center h-screen prose-max">
      <div className="text-center prose">
        <h1 className="text-5xl font-bold">Count Up</h1>
        <div className="p-8">
          <motion.h3 className="py-6"
                     initial={{opacity: 0, y: 50}} // Initial position and opacity
                     animate={{opacity: 1, y: 0}} // Animation to fully visible and original position
                     transition={{duration: 0.5, delay: 0.2}} // Animation duration and delay
          >

            Customize your countdown and share it with others.
            Follow a few steps to create it, all in just a few clicks.
          </motion.h3>
          <motion.button className="btn btn-primary"
                         initial={{opacity: 0, x: 100}} // Initial position and opacity
                         animate={{opacity: 1, x: 0}} // Animation to fully visible and original position
                         transition={{duration: 0.5, delay: 0.5}} // Animation duration and delay
          >Get Started
          </motion.button>
        </div>
      </div>
    </div>
      <StepperCustom></StepperCustom>

    </main>
  );
}
