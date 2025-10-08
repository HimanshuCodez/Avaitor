import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import About from './components/About';
import Contact from './components/Contact';
import AviatorsGame from './Pages/Home';
import AviatorWithdrawal from './Pages/Withdraw';
import AviatorLayout from './Pages/Game';
import AddCash from './Pages/AddCash';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AviatorsGame />} />
        <Route path="/screen" element={<AviatorsGame />} />
        <Route path="/about" element={<About />} />
        <Route path="/withdraw" element={<AviatorWithdrawal/>} />
        <Route path="/add-cash" element={<AddCash />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/game" element={<AviatorLayout />} />
      </Routes>
    </div>
  );
}

export default App;