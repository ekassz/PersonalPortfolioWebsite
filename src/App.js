import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HeroSection from './Pages/Home/HeroSection';
import AboutMe from './Pages/Home/AboutMe';
import Resume from './Pages/Home/Resume';
import Projects from './Pages/Home/Projects';
import ContactMe from './Pages/Home/ContactMe';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { ThemeProvider } from './Context/Theme';

function App() {
  return (
    <ThemeProvider>
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path='/home' element={<HeroSection/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
