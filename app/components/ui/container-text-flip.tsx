"use client";

import React, { useState, useEffect, useId } from "react";

import { motion } from "framer-motion";

import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {

  return twMerge(clsx(inputs));

}

export interface ContainerTextFlipProps {

  /** Array of words to cycle through in the animation */

  words?: string[];

  /** Time in milliseconds between word transitions */

  interval?: number;

  /** Additional CSS classes to apply to the container */

  className?: string;

  /** Additional CSS classes to apply to the text */

  textClassName?: string;

  /** Duration of the transition animation in milliseconds */

  animationDuration?: number;

}

export function ContainerTextFlip({

  words = ["better", "modern", "beautiful", "awesome"],

  interval = 3000,

  className,

  textClassName,

  animationDuration = 700,

}: ContainerTextFlipProps) {

  const id = useId();

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const [width, setWidth] = useState(100);

  const textRef = React.useRef<HTMLDivElement>(null);

  const updateWidthForWord = () => {

    if (textRef.current) {

      // Add some padding to the text width

      const textWidth = textRef.current.scrollWidth + 30;

      setWidth(textWidth);

    }

  };

  useEffect(() => {

    updateWidthForWord();

  }, [currentWordIndex]);

  useEffect(() => {

    const intervalId = setInterval(() => {

      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);

    }, interval);

    return () => clearInterval(intervalId);

  }, [words, interval]);

  return (

    <motion.p

      layout

      layoutId={`words-here-${id}`}

      animate={{ width }}

      transition={{ duration: animationDuration / 2000 }}

      className={cn(

        "relative inline-block rounded-xl pt-2 pb-3 px-3 text-center font-bold text-white",

        "bg-[#1E3A8A]",

        "shadow-[0_4px_8px_rgba(30,58,138,0.3)]",

        className

      )}

      key={words[currentWordIndex]}

    >

      <motion.div

        transition={{

          duration: animationDuration / 1000,

          ease: "easeInOut",

        }}

        className={cn("inline-block", textClassName)}

        ref={textRef}

        layoutId={`word-div-${words[currentWordIndex]}-${id}`}

      >

        <motion.div className="inline-block">

          {words[currentWordIndex].split("").map((letter, index) => (

            <motion.span

              key={index}

              initial={{

                opacity: 0,

                filter: "blur(10px)",

              }}

              animate={{

                opacity: 1,

                filter: "blur(0px)",

              }}

              transition={{

                delay: index * 0.02,

              }}

            >

              {letter}

            </motion.span>

          ))}

        </motion.div>

      </motion.div>

    </motion.p>

  );

}

// The demo component below remains unchanged and will now work correctly.

export default function ContainerTextFlipDemo() {

  return (

    <ContainerTextFlip

      words={["better", "modern", "Tyler Durden", "awesome"]}

    />

  );

}

