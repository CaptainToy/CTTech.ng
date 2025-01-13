import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layout/home";
import Error from './layout/error';
import About from './layout/about';
import Bam from './component/BookAmeating/BAM';
import Work from './layout/skills';
import Services from "./layout/services";
import FAQContainer from './layout/FAQContainer'; 
import UI from './layout/UIComponent';
import NoInternet from './component/NetWorkError/network';
import BamCom from "./layout/BamCom"
import Form from './component/form/form'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Router>
      {isOnline ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Bam" element={<Bam />} />
          <Route path="/Our Work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/FAQ" element={<FAQContainer />} />
          <Route path="/UI" element={<UI />} />
          <Route path="/BamCom" element={<BamCom />} />
          <Route path="/Form" element={<Form />} />
          <Route path="*" element={<Error />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<NoInternet />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
