import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SingleCountry from "./pages/SingleCountry";
import Error from "./pages/Error";

export const MainContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);
  const [theme, setTheme] = useState("light");

  const data = {
    items,
    setItems,
    theme,
    setTheme,
  };

  return (
    <div className="App">
      <MainContext.Provider value={data}>
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="countries/:id" element={<SingleCountry />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      </MainContext.Provider>
    </div>
  );
}

export default App;
