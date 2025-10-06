import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen13 from './screens/HomeScreen13';
import CafeScreen16 from './screens/CafeScreen16';
import NotesScreen83 from './screens/NotesScreen83';
import CoffeeShopApp821 from './screens/CoffeeShopApp821';
import ScreensIndex from './screens/index';
import { FavoritesProvider } from './context/FavoritesContext';
import FavoritesScreen from './screens/FavoritesScreen';

// PUBLIC_INTERFACE
function App() {
  // Wrap with FavoritesProvider to share favorite state across screens
  return (
    <Router>
      <FavoritesProvider>
        <Routes>
          {/* Default route renders Home Screen (1:3) */}
          <Route path="/" element={<HomeScreen13 />} />
          <Route path="/screens" element={<ScreensIndex />} />
          <Route path="/screens/home-1-3" element={<HomeScreen13 />} />
          {/* Canonical cafe route */}
          <Route path="/screens/cafe" element={<CafeScreen16 />} />
          {/* Legacy/alternate path kept for compatibility */}
          <Route path="/screens/cafe-1-6" element={<CafeScreen16 />} />
          <Route path="/screens/favorites" element={<FavoritesScreen />} />
          <Route path="/screens/notes-8-3" element={<NotesScreen83 />} />
          <Route path="/screens/coffee-app-8-21" element={<CoffeeShopApp821 />} />
        </Routes>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
