import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Routes, Route } from "react-router-dom";
import HomePages from './Pages/HomePages';
import OtherPages from './Pages/OtherPages';

function App() {
  const [count, setCount] = useState(0)
  
  return (
   <div>
    <Navbar />
    <Form />
    <Routes>
      <Route path='/' Component={HomePages} />
      <Route path='/OtherPages'  Component={OtherPages} />
    </Routes>
   </div>
  )
}

export default App
