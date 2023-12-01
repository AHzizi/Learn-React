
import './App.css'
import { Routes, Route } from "react-router-dom";
import HomePages  from "./Pages/HomePages";
import OtherPages from './Pages/OtherPages';
import AnotherPage from './Pages/AnotherPage';




function App() {


return (
  <div>
    <Routes>
      <Route path='/' Component={HomePages} />
      <Route path='/OtherPages' Component={OtherPages} />
      <Route path='/AnotherPage' Component={AnotherPage} />
    </Routes>
  </div>
  )
}

export default App
