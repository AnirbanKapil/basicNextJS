import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border"

function HeroSection() {
  return (
    <div className="w-full h-auto md:h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 m:py-0">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="grey"
      />
        <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Master The Art Of Music</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                Dive into our comprehensive music courses and transform your musical journer today.Whether you are a beginner or looking to refine your skills,
                join us to unlock your true potential. 
            </p>
            <div className="mt-4">
                <Link href={"/courses"}>
                <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-neutral-800">
                Explore Courses
                </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection