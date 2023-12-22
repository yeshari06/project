import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Project from './routes/project';
import Home from './routes/home';
import About from './routes/about';
import Contact from './routes/contact';

function App() {
  return (
    <>
    <Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/project' element={<Project/>}/>
      < Route path='/about' element={<About/>}/>
      < Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );     
}

export default App;
