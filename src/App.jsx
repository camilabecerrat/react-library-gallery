import React from 'react';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Filters />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;