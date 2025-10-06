import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * ScreensIndex provides a simple landing page to navigate to all Figma screens.
 */
export default function ScreensIndex() {
  const screens = [
    { path: '/screens/home-1-3', label: 'Home Screen 1:3' },
    { path: '/screens/cafe-1-6', label: 'Cafe Screen 1:6' },
    { path: '/screens/favorites', label: 'Favorites' },
    { path: '/screens/notes-8-3', label: 'Notes 8:3' },
    { path: '/screens/coffee-app-8-21', label: 'Coffee Shop App 8:21' },
  ];
  return (
    <div style={{ padding: 24 }}>
      <h1>Figma Screens</h1>
      <ul>
        {screens.map((s) => (
          <li key={s.path}>
            <Link to={s.path}>{s.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
