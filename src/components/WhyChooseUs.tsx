"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent= [
    {
        title: "Personalized Learning Paths",
        description: "Our courses are tailored to meet each students unique interests, skill level, and goals. Whether you're a beginner or an advanced musician, we create a personalized plan that helps you progress at your own pace and achieve your musical aspirations."
    },
    {
        title: "Experienced and Passionate Instructors",
        description: "Our instructors are not only highly skilled musicians but also dedicated educators who love sharing their knowledge. With years of experience in performance and teaching, they bring enthusiasm and expertise to each lesson, making learning enjoyable and effective."
    },
    {
        title: "Wide Range of Instruments and Styles",
        description: "From classical piano and guitar to jazz saxophone and modern electronic music, we offer courses across a wide array of instruments and genres. This variety allows students to explore different musical styles and find what resonates most with them."
    },
    {
        title: "Flexible Scheduling Options",
        description: "We understand that everyone schedule is unique, so we offer flexible lesson times to fit your availability. With options for evening, weekend, and online classes, we make it easy for students to pursue their passion for music without sacrificing their other commitments."
    },
    {
        title: "Opportunities for Performance and Growth",
        description: "Our students regularly participate in recitals, concerts, and workshops that help build confidence and stage presence. These events provide valuable experience and allow students to showcase their progress, connect with fellow musicians, and grow in a supportive community."
    }
];




function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs