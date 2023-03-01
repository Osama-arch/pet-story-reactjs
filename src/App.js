import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import About from './pages/About';
import Donate from './pages/Donate';
import ComingSoon from './pages/ComingSoon';
import Footer from './sections/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
