import Home from "./pages/Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import './App.css'
import SingleCountry from "./pages/SingleCountry";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:id" element={<SingleCountry />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
