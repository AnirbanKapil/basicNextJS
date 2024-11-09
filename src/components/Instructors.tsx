import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"


function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
          <p className="text-base md:text-lg text-white text-center mb-4">Discover our talented professionals who will guide your musical journey</p>
          <div className="flex flex-row items-center justify-center mb-10 w-full">
            
          </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors