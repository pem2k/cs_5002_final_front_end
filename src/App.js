import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home.jsx";
import Inverse from "./pages/Inverse.jsx";
import Cipher from "./pages/Cipher.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/Inverse" element ={<Inverse />}/>
        <Route path = "/Cipher" element={<Cipher />}/>
      </Routes>
    </Router>
  );
}

export default App;
