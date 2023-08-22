import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Presentation } from './pages/Presentation';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';
import { Contact } from './pages/Contact';
import { Email } from './pages/Email';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Email/>
     
    </div>
  );
}

export default App;
