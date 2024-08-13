import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import OtherPages from './Pages/OtherPages';
import AnotherPage from "./Pages/AnotherPage";
import ToDoPage from './Pages/ToDoPage';
import NewHome from './Pages/NewHome';
import ClockPages from './Pages/ClockPages';
import GamePages from './Pages/GamePages';
import { Helmet } from 'react-helmet';
import MyImg from './assets/thumbnail.png';
import LearnGrid from './Pages/LearnGrid';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewHome />} />
          <Route path='/home-pages' element={<HomePages />} />
          <Route path='/other-pages' element={<OtherPages />} />
          <Route path='/another-page' element={<AnotherPage />} />
          <Route path='/todo-page' element={<ToDoPage />} />
          <Route path='/clock-page' element={<ClockPages />} />
          <Route path='/game-page' element={<GamePages />} />
          <Route path='/learn-grid' element={<LearnGrid />} />
        </Routes>
      </BrowserRouter>
      <Helmet>
        <meta property="og:title" content="WEB Latihan" />
        <meta property="og:description" content="Web Untuk Latihan REACT JS" />
        <meta property="og:image" content="https://react-pakai-niat.vercel.app/assets/thumbnail.png" />
        <meta property="og:url" content="https://react-pakai-niat.vercel.app" />
        <meta property="og:type" content="website" />
      </Helmet>

    </div>
  );
}

export default App;
