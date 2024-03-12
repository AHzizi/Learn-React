import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import OtherPages from './Pages/OtherPages';
import AnotherPage from "./Pages/AnotherPage";
import ToDoPage from './Pages/ToDoPage';
import NewHome from './Pages/NewHome';
import { Helmet } from 'react-helmet';
import MyImg from './assets/thumbnail.png';

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
