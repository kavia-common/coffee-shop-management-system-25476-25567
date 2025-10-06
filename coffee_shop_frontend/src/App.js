import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen13 from './screens/HomeScreen13';
import CafeScreen16 from './screens/CafeScreen16';
import NotesScreen83 from './screens/NotesScreen83';
import CoffeeShopApp821 from './screens/CoffeeShopApp821';
import ScreensIndex from './screens/index';

// Lightweight, theme-aware navbar styles
const navbarStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 100,
  width: '100%',
  background: 'var(--bg-secondary)',
  borderBottom: '1px solid var(--border-color)',
};
const navInnerStyle = {
  maxWidth: 1140,
  margin: '0 auto',
  padding: '12px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const brandStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  color: 'var(--text-primary)',
  textDecoration: 'none',
  fontWeight: 700,
};
const linksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 14,
};
const linkClass = 'App-link'; // uses existing themed link color

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

  function Navbar() {
    return (
      <nav style={navbarStyle} role="navigation" aria-label="Top navigation">
        <div style={navInnerStyle}>
          <Link to="/" style={brandStyle} aria-label="Go to Home">
            <img src={logo} alt="" style={{ height: 28 }} />
            <span>Coffee Shop</span>
          </Link>
          <div style={linksStyle}>
            <Link className={linkClass} to="/">Home</Link>
            <Link className={linkClass} to="/screens">All Screens</Link>
            <Link className={linkClass} to="/screens/home-1-3">Home Screen (1:3)</Link>
            <Link className={linkClass} to="/screens/cafe-1-6">Cafe Screen (1:6)</Link>
            <Link className={linkClass} to="/screens/notes-8-3">Notes [Delete after reading] (8:3)</Link>
            <Link className={linkClass} to="/screens/coffee-app-8-21">Coffee Shop App (8:21)</Link>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              style={{ position: 'static' }}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>
      </nav>
    );
  }

  const HomeLanding = () => (
    <div className="App">
      <Navbar />
      <header className="App-header">
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

  // Wrapper to render navbar above routed screens for consistent navigation
  const WithNavbar = ({ children }) => (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: 12 }}>{children}</div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/screens" element={<WithNavbar><ScreensIndex /></WithNavbar>} />
        <Route path="/screens/home-1-3" element={<WithNavbar><HomeScreen13 /></WithNavbar>} />
        <Route path="/screens/cafe-1-6" element={<WithNavbar><CafeScreen16 /></WithNavbar>} />
        <Route path="/screens/notes-8-3" element={<WithNavbar><NotesScreen83 /></WithNavbar>} />
        <Route path="/screens/coffee-app-8-21" element={<WithNavbar><CoffeeShopApp821 /></WithNavbar>} />
      </Routes>
    </Router>
  );
}

export default App;
