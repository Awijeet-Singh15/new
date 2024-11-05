import './App.css'
import Carousel from './LandingPage/Glimpse'
 import HomeAbout from './LandingPage/HomeAbout'
import JoinOur from './LandingPage/JoinOur'
import OurEvents from './LandingPage/OurEvents'
import TestimonialsCarousel from './LandingPage/Testimonials'
 import UpperSection from './LandingPage/UpperSection'
function App() {
  return (
    <>
     <div className="overflow-x-hidden bg-errie-black after:content-['']

        ">
          <UpperSection/>
           <HomeAbout/>
          <OurEvents/>
          <TestimonialsCarousel/>
           <Carousel/>
          <JoinOur/>

        </div>
    </>
  )
}

export default App
