import './App.css';
import React, { useRef } from 'react';
import About from './component/About';
import Firstcontener from './component/Firstcontener';
import Testimonial from './component/Testimonial';
import Myservice from './component/Myservice';
import Mywork from './component/Mywork';
import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  // Create refs for all components
  const aboutRef = useRef(null);
  const myServiceRef = useRef(null);
  const myWorkRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll functions for each section
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMyService = () => {
    if (myServiceRef.current) {
      myServiceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMyWork = () => {
    if (myWorkRef.current) {
      myWorkRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTestimonial = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar 
        scrollToAbout={scrollToAbout} 
        scrollToMyService={scrollToMyService} 
        scrollToMyWork={scrollToMyWork} 
        scrollToTestimonial={scrollToTestimonial} 
        scrollToContact={scrollToContact}
      />
      <Firstcontener scrollToMyWork={scrollToMyWork} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={myServiceRef}>
        <Myservice />
      </div>
      <div ref={myWorkRef}>
        <Mywork />
      </div>
      <div ref={testimonialRef}>
        <Testimonial />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
