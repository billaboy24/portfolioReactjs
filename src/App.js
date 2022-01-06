import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Footer from './components/Footer/footer';
import Particles from "react-tsparticles";

import Header from './components/Header/header';


function App() {
  return (
    
    <div className="app">
      <Particles options={
        {
          "background": {
            "color": {
              "value": "#000000"
            },
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
          },
          "fullScreen": {
            "zIndex": 0
          },
          "interactivity": {
            "events": {
              "onClick": {
                "mode": "push"
              },
              "onHover": {
                "mode": "repulse"
              }
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40
              },
              "grab": {
                "distance": 400
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "links": {
              "color": {
                "value": "#ffffff"
              },
              "distance": 150,
              "enable": true,
              "warp": true
            },
            "move": {
              "attract": {
                "rotate": {
                  "x": 600,
                  "y": 1200
                }
              },
              "enable": true,
              "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
              },
              "speed": 6,
              "warp": true
            },
            "number": {
              "density": {
                "enable": true
              },
              "value": 80
            },
            "opacity": {
              "value": 0.5,
              "animation": {
                "speed": 3,
                "minimumValue": 0.1
              }
            },
            "size": {
              "random": {
                "enable": true
              },
              "value": {
                "min": 1,
                "max": 3
              },
              "animation": {
                "speed": 20,
                "minimumValue": 0.1
              }
            }
          }
        }
      }/>
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
