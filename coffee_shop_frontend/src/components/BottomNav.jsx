import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * BottomNav renders a reusable bottom navigation consistent with the Figma design.
 * It uses NavLink to provide active styling and shows a rounded plate behind the active icon.
 *
 * Props:
 * - className?: optional extra class names
 */
export default function BottomNav({ className = '' }) {
  const getActive = ({ isActive }) => (isActive ? 'is-active' : '');

  return (
    <nav className={`bottom-nav ${className}`} aria-label="Bottom Navigation">
      <NavLink to="/screens/home-1-3" className={({ isActive }) => `bn-item home ${isActive ? 'is-active' : ''}`} aria-label="Home">
        <span className="plate" aria-hidden="true"></span>
        <img className="icon" src="/assets/figmaimages/figma_image_205_154.png" alt="" draggable="false" />
      </NavLink>

      <NavLink to="/screens" className={getActive} aria-label="Favorites">
        <img className="icon" src="/assets/figmaimages/figma_image_205_162.png" alt="" draggable="false" />
      </NavLink>

      <NavLink to="/screens" className={getActive} aria-label="Bookmarks">
        <img className="icon" src="/assets/figmaimages/figma_image_205_157.png" alt="" draggable="false" />
      </NavLink>

      <NavLink to="/screens" className={getActive} aria-label="Profile">
        <img className="icon" src="/assets/figmaimages/figma_image_205_160.png" alt="" draggable="false" />
      </NavLink>
    </nav>
  );
}
