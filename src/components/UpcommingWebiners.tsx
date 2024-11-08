"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"


const featuredWebinars = [
  {
    title: "Introduction to Music Theory",
    description: "A beginner's guide to understanding the basics of music theory.",
    slug: "introduction-to-music-theory",
    isFeatured: true
  },
  {
    title: "Mastering Scales and Chords",
    description: "Explore different scales and chords essential for any musician.",
    slug: "mastering-scales-and-chords",
    isFeatured: false
  },
  {
    title: "Improvisation Techniques",
    description: "Learn improvisation skills to enhance your musical creativity.",
    slug: "improvisation-techniques",
    isFeatured: true
  },
  {
    title: "Rhythm and Timing",
    description: "Understand rhythm, beats, and timing to improve your performance.",
    slug: "rhythm-and-timing",
    isFeatured: false
  },
  {
    title: "Introduction to Jazz Music",
    description: "Discover the unique style and history of jazz music.",
    slug: "introduction-to-jazz-music",
    isFeatured: true
  },
  {
    title: "Songwriting Basics",
    description: "Learn the fundamentals of songwriting and creating original music.",
    slug: "songwriting-basics",
    isFeatured: false
  },
  {
    title: "Ear Training Exercises",
    description: "Develop a better ear for identifying musical notes and intervals.",
    slug: "ear-training-exercises",
    isFeatured: true
  },
  {
    title: "Music Production Essentials",
    description: "An introduction to music production tools and techniques.",
    slug: "music-production-essentials",
    isFeatured: false
  },
  {
    title: "History of Classical Music",
    description: "Explore the origins and evolution of classical music.",
    slug: "history-of-classical-music",
    isFeatured: false
  },
  
];




function UpcommingWebiners() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINERS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className="mt-10">
        <HoverEffect items={featuredWebinars.map((webinar)=> (
          {
            title : webinar.title,
            description : webinar.description,
            link : `/${webinar.slug}`
          }))} />
        </div>
        <div className="mt-10 text-center">
        <Link href={"/"} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transation duration-200">
        View All Webiners
        </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcommingWebiners