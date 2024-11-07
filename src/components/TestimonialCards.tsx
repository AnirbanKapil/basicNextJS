"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 

const testimonials = [
    {
        quote: "This school has transformed my music skills! The instructors are so supportive and really know how to make learning fun.",
        name: "Sarah L.",
        title: "Piano Student"
    },
    {
        quote: "I started as a complete beginner, but now I feel so confident playing guitar. The personalized lessons have made all the difference!",
        name: "Mark D.",
        title: "Guitar Student"
    },
    {
        quote: "The environment here is amazing. I’ve learned not only how to play violin but also how to express myself through music.",
        name: "Emily R.",
        title: "Violin Student"
    },
    {
        quote: "The flexibility in scheduling has been a huge help. I can balance my classes and still enjoy learning at my own pace.",
        name: "James K.",
        title: "Saxophone Student"
    },
    {
        quote: "The recitals and performance opportunities here are the best! They’ve really helped me overcome stage fright.",
        name: "Olivia M.",
        title: "Voice Student"
    },
    {
        quote: "The teachers here are true experts. They encouraged me to push my limits and discover new aspects of my talent.",
        name: "Chris P.",
        title: "Drum Student"
    },
    {
        quote: "I love how versatile the classes are. I’ve been able to explore different genres and instruments, which keeps things exciting!",
        name: "Ava T.",
        title: "Multi-Instrumentalist Student"
    },
    {
        quote: "I couldn’t have asked for a better learning experience. The instructors are genuinely invested in my growth.",
        name: "Liam J.",
        title: "Cello Student"
    },
    {
        quote: "This school has a fantastic sense of community. I've met amazing people and gained a lot of confidence in my playing.",
        name: "Sophia W.",
        title: "Flute Student"
    },
    {
        quote: "My progress here has been incredible. The lessons are challenging but rewarding, and I always leave feeling inspired.",
        name: "Michael B.",
        title: "Trumpet Student"
    }
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col justify-center items-center overflow-hidden">
        <h2 className="text-4xl font-bold text-center mt-6 pt-4 mb-4 z-10 ">
        Hear Our Harmony : voices of success 
        </h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="h-[40rem] rounded-md flex flex-col  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
    </div>
  )
}

export default MusicSchoolTestimonials