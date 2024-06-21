import Navbar from "./components/navbar/Navbar"
import './App.scss'
import Arabic from './components/arabic/Arabic'
import Hero from "./components/hero/Hero"
import Contact from "./components/contact/Contact"
import Careers from "./components/careers/Careers"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"
import Testimonials from "./components/testimonials/Testimonials"
import Features from "./components/features/Features"
import Methods from "./components/methods/Methods"
import Cards from "./components/cards/Cards"

function App() {
  
  return (
    <>
    <div>
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
    
    <section id="About">
      <About/>
      </section>
  
<section id="features">
    <Features/>
</section>
      
<section id="Cards">
<Cards />
</section>
       

       {/* <section id="Testimonials">
        <Testimonials/>
      </section> */}
      <section id="Methods">
        <Methods/>
      </section>
      <section id="Contact">
        <Contact />
        <Footer/>
      </section>
{/* <section>
  <Arabic/>
</section> */}
      
        
      
    </div>
    </>
  )
}

export default App
