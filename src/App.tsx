import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Barista from './pages/Barista';
import './App.css';
import Dev from './pages/Dev';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dev" element={<Dev />} />
        <Route path="/barista" element={<Barista />} />
        <Route path="/" element={<Dev />} />
      </Routes>
    </Router>
  );
}

export default App;
