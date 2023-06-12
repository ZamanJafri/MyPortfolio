import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Home from './routes/Home'
import Project from './routes/Project'
import Contact from './routes/Contact'
import About from './routes/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
