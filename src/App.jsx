import './style/App.scss';
import Header from './components/layout/Header/Header';
import About from './components/sections/About/About';
import Hero from './components/sections/Hero/Hero';
import Skills from './components/sections/Skills/Skills';
import Works from './components/sections/Works/Works';
import Contact from './components/sections/Contact/Contact';
import Preloader from './components/components/Preloader/Preloader';
import { useEffect } from 'react';

// &======================== APP ========================& //

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <Preloader />
      <Header />
      <Hero />
      <section className='sections-wrapper'>
        <About />
        <Skills />
        <Works />
        <Contact />
      </section>
    </div>
  );
}

export default App;
