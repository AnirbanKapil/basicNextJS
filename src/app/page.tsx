import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/testimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] bg-grid-white/[0.02]">
       <HeroSection/>
       <FeaturedCourses/>
       <WhyChooseUs/>
       <MusicSchoolTestimonials/>
    </main>
  );
}
