import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Presentation } from './pages/Presentation';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation/>
      <Projects/>
      <Skills/>
     
    </div>
  );
}

export default App;
