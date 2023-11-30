
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePages  from "./Pages/HomePages";
import OtherPages from './Pages/OtherPages';



function App() {


return (
  <div>
    <Routes>
      <Route path='/' Component={HomePages} />
      <Route path='/OtherPages' Component={OtherPages} />
    </Routes>
  </div>
  )
}

export default App
