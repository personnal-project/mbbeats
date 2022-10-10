import LayoutAdmin from './pages/admin/layoutAdmin/LayoutAdmin';
import Error404 from './pages/error/Error404';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from './components/public/navigation/Navigation';
import Home from './pages/public/home/Home';
import Musique from './pages/public/musique/Musique';
import Beats from './pages/public/beats/Beats';
import Contact from './pages/public/contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/musique" element={<Musique/>}/>
          <Route exact path="/beats" element={<Beats/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/admin" element={<LayoutAdmin/>}/>
          
          <Route exact path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
