import { Route, Routes,Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />
        <Route path="/general" element={<News category="general"/>}/>
        <Route path="/business" element={<News category="business"/>}/>
        <Route path="/entertainment" element={<News category="entertainment"/>}/>
        <Route path="/health" element={<News category="health"/>}/>
        <Route path="/science" element={<News category="science"/>}/>
        <Route path="/sports" element={<News category="sports"/>}/>
        <Route path="/technology" element={<News category="technology"/>}/>
      </Routes>
    </>
  );
}

export default App;
