import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar.jsx';
import Home from "./pages/Home.jsx";
import Inverse from "./pages/Inverse.jsx";
import Carousel from './components/Carousel.jsx';

function App() {
  return (
    <div>
      <main>
        <Router>
          <Navbar/>
          <Carousel/>
          <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path ="/Inverse" element ={<Inverse />}/>
          </Routes>
        </Router>
    </main>
    </div>
  );
}

export default App;
