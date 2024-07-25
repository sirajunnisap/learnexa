
import Hero from '../components/hero/Hero';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Testimonials from '../components/testimonials/Testimonials';
import Features from '../components/features/Features';
import Methods from '../components/methods/Methods';
import Cards from '../components/cards/Cards';
import Navbar from '../components/navbar/Navbar';
import Why from '../components/why/Why';
import AboutUs from '../components/aboutUs/AboutUs';
import WhatsApp from '../components/whatsapp/WhatsApp';


const HomePage = () => {
  return (
    <div>
      <section id="HOMEPAGE">
        <Navbar />
        <Hero />
        <WhatsApp/>
      </section>
      
      <section id="WHY">
        <Why />
      </section>

      <section id="FEATURES">
        <Features />
      </section>

      <section id="CARDS">
        <Cards />
      </section>

      <section id="METHODS">
        <Methods />
      </section>

      <section id="ABOUT">
        <AboutUs />
      </section>

      <section id="TESTIMONIALS">
        <Testimonials />
      </section>

      <section id="CONTACT">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
