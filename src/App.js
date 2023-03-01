import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './sections/Header';
import About from './pages/About';
import Donate from './pages/Donate';
import Footer from './sections/Footer';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/donate' element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
