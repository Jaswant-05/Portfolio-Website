import React from 'react'
import  Navbar from './views/Navbar'
import Home from './views/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './views/About'
import Projects from './views/Projects'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
