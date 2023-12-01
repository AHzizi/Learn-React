
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages  from "./Pages/HomePages";
import OtherPages from './Pages/OtherPages';
import AnotherPage from './Pages/AnotherPage';




function App() {


return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePages} />
        <Route path='/OtherPages' Component={OtherPages} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
