import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import  Landing from './Pages/Landing/Landing';
import  Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
