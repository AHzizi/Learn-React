
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages  from "./Pages/HomePages";
import OtherPages from './Pages/OtherPages';




function App() {


return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/'  exact Component={HomePages} />
        <Route path='/OtherPages' Component={OtherPages} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
