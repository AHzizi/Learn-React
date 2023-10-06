import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import OtherPages from './Pages/OtherPages'
import GamePages from './Pages/GamePages' // Corrected import name

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Navbar />
      <Form />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/Other" element={<OtherPages />} />
        <Route path="/Games" element={<GamePages />} /> {/* Corrected component name */}
      </Routes>
    </div>
  )
}

export default App
