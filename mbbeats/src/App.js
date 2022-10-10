import LayoutPublic from './pages/public/layoutPublic/LayoutPublic';
import LayoutAdmin from './pages/admin/layoutAdmin/LayoutAdmin';
import Error404 from './pages/error/Error404';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LayoutPublic/>}/>
          <Route exact path="/admin" element={<LayoutAdmin/>}/>
          
          <Route exact path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
