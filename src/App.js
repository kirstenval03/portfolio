import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Presentation } from './pages/Presentation';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Presentation/>
     
    </div>
  );
}

export default App;
