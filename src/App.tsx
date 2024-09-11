import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Hero from './components/Hero';
import PastFestivals from './components/PastFestivals';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Home />
        <Hero />
        <section id="past-festivals">
          <PastFestivals />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;