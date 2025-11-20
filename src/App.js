import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Inverse from "./pages/Inverse.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Inverse/>}/>
      </Routes>
    </Router>
  );
}

export default App;
