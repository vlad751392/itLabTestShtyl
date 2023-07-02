import React from 'react';
import './App.css';
import { Header } from 'modules/layouts/Header';
import { HomeSlider } from 'modules/HomeSlider/HomeSlider';
import { Features } from 'modules/Features/Features';
import { Gallery } from 'modules/Gallery/Gallery';
import { Watch } from 'modules/Watch/Watch';
import { Contact } from 'modules/Contact/Contact';
import { Footer } from 'modules/layouts/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <Features />
      <Gallery />
      <Watch />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
