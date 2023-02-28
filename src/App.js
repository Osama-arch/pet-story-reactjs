import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Map from './pages/Map';
import Zoos from './pages/Zoos';
import Footer from './sections/Footer';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/map' element={<Map />} />
          <Route path='/zoos' element={<Zoos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
