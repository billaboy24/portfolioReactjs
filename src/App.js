import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';

import Header from './components/Header/header';
import ParticleBackground from './components/particlesBackground';


function App() {
  
  return (
    
    <div className="app">
      <ParticleBackground/>
      <Header />
      <main>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
      <Footer/>

      
    </div>
  );
}

export default App;
