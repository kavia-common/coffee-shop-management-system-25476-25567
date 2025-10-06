import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen13 from './screens/HomeScreen13';
import CafeScreen16 from './screens/CafeScreen16';
import NotesScreen83 from './screens/NotesScreen83';
import CoffeeShopApp821 from './screens/CoffeeShopApp821';
import ScreensIndex from './screens/index';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const HomeLanding = () => (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <Link className="App-link" to="/screens">Go to Figma Screens</Link>
      </header>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/screens" element={<ScreensIndex />} />
        <Route path="/screens/home-1-3" element={<HomeScreen13 />} />
        <Route path="/screens/cafe-1-6" element={<CafeScreen16 />} />
        <Route path="/screens/notes-8-3" element={<NotesScreen83 />} />
        <Route path="/screens/coffee-app-8-21" element={<CoffeeShopApp821 />} />
      </Routes>
    </Router>
  );
}

export default App;
