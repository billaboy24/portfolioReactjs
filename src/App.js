import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';

import Header from './components/Header/header';



function App() {
  
  return (
    
      
    <div className="app">
     
     
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
