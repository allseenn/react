import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

