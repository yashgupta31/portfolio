import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import './App.css';
// import { Box, Heading, Text, Button, useStatStyles } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProfessionalProjects from './components/ProfessionalProjects';
import Projects from './components/Projects';
import Animation from './components/Animation';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // Wait for 1.8 seconds
    return () => clearTimeout(timer);
  }, []);
   return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      
      {!loading && (
        <div>
          <Navbar />
      {/* <Routes>
        <Route path="/" element={
          <div> */}
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="professional-projects">
              <ProfessionalProjects />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="contact">
              <Contact />
              {/* <Animation /> */}
            </div>
            <ScrollToTop />
          </div>
      )}
    </>
  )
}

export default App

