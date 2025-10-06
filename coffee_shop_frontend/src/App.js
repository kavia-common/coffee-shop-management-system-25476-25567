import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen13 from './screens/HomeScreen13';
import CafeScreen16 from './screens/CafeScreen16';
import NotesScreen83 from './screens/NotesScreen83';
import CoffeeShopApp821 from './screens/CoffeeShopApp821';
import ScreensIndex from './screens/index';

// PUBLIC_INTERFACE
function App() {
  // No top navbar; screens render full-bleed per Figma
  return (
    <Router>
      <Routes>
        {/* Default route renders Home Screen (1:3) */}
        <Route path="/" element={<HomeScreen13 />} />
        <Route path="/screens" element={<ScreensIndex />} />
        <Route path="/screens/home-1-3" element={<HomeScreen13 />} />
        {/* Canonical cafe route */}
        <Route path="/screens/cafe" element={<CafeScreen16 />} />
        {/* Legacy/alternate path kept for compatibility */}
        <Route path="/screens/cafe-1-6" element={<CafeScreen16 />} />
        <Route path="/screens/notes-8-3" element={<NotesScreen83 />} />
        <Route path="/screens/coffee-app-8-21" element={<CoffeeShopApp821 />} />
      </Routes>
    </Router>
  );
}

export default App;
