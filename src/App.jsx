import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Routes, Route } from "react-router-dom";
import HomePages from './Pages/HomePages';
import OtherPages from './Pages/OtherPages';
import TicTacToe from './Pages/GamePages';
function App() {
  const [count, setCount] = useState(0)
  let a = 0;
  
  return (
   <div>
    <Navbar />
    <Form />
    <Routes>
      <Route path='/' Component={HomePages} />
      <Route path='/Other' Component={OtherPages} />
      <Route path='Games' Component={GamePages} />
    </Routes>
   </div>
  )
}

export default App
