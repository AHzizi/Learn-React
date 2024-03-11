import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import OtherPages from './Pages/OtherPages';
import AnotherPage from "./Pages/AnotherPage";
import ToDoPage from './Pages/ToDoPage';
import NewHome from './Pages/NewHome';

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
    </div>
  );
}

export default App;
