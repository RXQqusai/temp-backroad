import React from 'react'
import Navbar from './componetes/Navbar';
import About from './componetes/About';
import Footer from './componetes/Footer';
import Tours from './componetes/Tours';
import Services from './componetes/Services';
import Hero from './componetes/Hero';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
    </>
  );
};

export default App;