"use client"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div className="h-auto md:h-[35rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-2">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl relative z-10 w-full text-center">
        <h1 
        className="mt-20 md:mt-0 text-7xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
        Master Skills with Expert Courses
        </h1>
        <p
         className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto md:mx-auto"
        >
            Advance your career with expert-led courses designed to build essential skills. Gain hands-on experience and real-world knowledge to succeed in today’s most in-demand fields and industries.
        </p>
        <div className="mt-4">
            <Link href={"/courses"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-block dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Courses
            </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
