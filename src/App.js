import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Map from './pages/Map';
import Zoos from './pages/Zoos';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/Map' element={<Map />} />
        <Route path='/Zoos' element={<Zoos />} />
      </Routes>
    </Router>
  );
}

export default App;
