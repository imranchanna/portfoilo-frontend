import React from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/experience/Experience';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
