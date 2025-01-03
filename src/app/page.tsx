import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/instructors";
import MusicSchoolTestimonials from "@/components/testimonialCards";
import UpcommingWebiners from "@/components/UpcommingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02]">
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChooseUs/>
       <MusicSchoolTestimonials/>
       <UpcommingWebiners/>
       <Instructors/>
       <Footer/>
    </main>
  );
}
