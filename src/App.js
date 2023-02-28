import React from "react";
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Aboutus from "./Pages/Aboutus/Aboutus";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutus />} />
    </Routes>
    </div>
    
  );
}

export default App;
