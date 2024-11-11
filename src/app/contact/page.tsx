"use client"
import { BackgroundLines } from "@/components/ui/background-lines";




function contact() {

  

  return (
    <div>
      <BackgroundLines>
        <div className="min-h-screen bg-gray-900 py-12 pt-36 text-center">
         
          <h1 className="text-7xl text-center font-bold mt-12">Contact Us</h1>
          
          <p className="mx-auto mt-8 text-gray-600 w-1/3">
            We are here to help with any questions about our courses programs or events.Reach out and let us know how we can assist you 
            in your musical journey
          </p>
          
         <div className="text-center mt-12">
          <input type="text" placeholder="Your Email Address" className="w-7/12 h-12 bg-gray-950 p-4  font-bold rounded-lg"/>
          <textarea placeholder="Your Message" className="mt-14 w-7/12 h-44 bg-gray-950 p-4 font-bold rounded-lg" />
          <div className="mt-9">
          <button className="bg-gray-600 p-4 m-4 rounded-lg">
            Send Message
           </button>
          </div>
       
        </div> 
    </div>
        
      </BackgroundLines>
    </div>
  )
}

export default contact