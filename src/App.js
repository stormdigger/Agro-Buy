// src/App.js
import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import LatestProducts from './components/LatestProducts';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <FeaturedProducts />
      <LatestProducts />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
