import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/home";
import Error from './layout/error'
import About from './layout/about'
import Bam from './component/BookAmeating/BAM'
import Work from './layout/skills'
import Services from "./layout/services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Bam" element={<Bam />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </Router>
  );
}

export default App;