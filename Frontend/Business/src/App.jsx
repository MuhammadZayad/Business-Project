import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation"; 
import ValueProposition from "./Home/ ValueProposition";
import CompanyOverview from "./Home/CompanyOverview";
import HighlightingServices from "./Home/HighlightingServices";
import ContactForm from './Contact us/ContactForm';
import Home from "./Home/Home";
import './index.css'
import Footer from "./Home/Footer";




const App = () => {
  

useEffect(() => {
  AOS.init({
    duration: 2000, // Global animation duration
       
  });
}, []);
  return (
    <Router>
      <Navigation />
      <Routes>
        Define your routes here
        {/* <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} /> */}
         <Route path="/ValueProposition" element={<ValueProposition />} />
        <Route path="/CompanyOverview" element={<CompanyOverview />} />
        <Route path="/HighlightingServices" element={<HighlightingServices />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Footer" element={<Footer/>} />
      </Routes>
    </Router>
  );
};

export default App;
