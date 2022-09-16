import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
