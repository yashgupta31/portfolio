import React, { useState } from 'react'
import './App.css';
// import { Box, Heading, Text, Button, useStatStyles } from '@chakra-ui/react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Animation from './components/Animation';
import Contact from './components/Contact';

const App = () => {
 

  return (
    // <div>
    //   <Navbar />
    //   {/* <Routes>
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/about' element={<About />} />
    //   </Routes> */}
    //   <div id='home'>
    //   <Home />
    //   </div>
      
    //   <div id='about'>
    //   <About />
    //   </div>
      
    // </div>

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
            <div id="projects">
              <Projects />
            </div>
            <div id="contact">
              <Contact />
              {/* <Animation /> */}
            </div>
          </div>
    //     } />
    //   </Routes>
    // </div>
  )
}

export default App

