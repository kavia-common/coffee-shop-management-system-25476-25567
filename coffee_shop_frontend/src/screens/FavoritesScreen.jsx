import React, { useMemo } from 'react';
import './home-screen-1-3.css';
import './shared-bottom-nav.css';
import BottomNav from '../components/BottomNav';
import { products } from '../data/products';
import { useFavorites } from '../context/FavoritesContext';

/**
 * PUBLIC_INTERFACE
 * FavoritesScreen shows the user's favorited items using existing product cards visuals.
 */
export default function FavoritesScreen() {
  const { favorites } = useFavorites();
  const items = useMemo(
    () => products.filter((p) => favorites.includes(p.id)),
    [favorites]
  );

  return (
    <div className="viewport">
      <div className="artboard" role="main" aria-label="Favorites Screen">
        <div className="layer text-203-70" style={{ top: 80, left: 23 }}>Favorites</div>

        {items.length === 0 && (
          <div
            className="layer"
            style={{ left: 23, top: 130, width: 329, color: '#6B7280', fontSize: 14 }}
            aria-live="polite"
          >
            You have no favorites yet. Tap the heart on a card to add one.
          </div>
        )}

        {/* Render favorites as a simple vertical list of cards */}
        <div className="layer" style={{ left: 23, top: 130, right: 23 }}>
          {items.map((p, idx) => (
            <div
              key={p.id}
              className="card"
              style={{ position: 'relative', marginBottom: 16, width: 329 }}
            >
              <div style={{ position: 'relative', width: 329, height: 160 }}>
                <img
                  src={p.image}
                  alt={`${p.name} image`}
                  style={{
                    width: 329,
                    height: 160,
                    borderRadius: 16,
                    objectFit: 'cover',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  }}
                />
              </div>
              <div style={{ marginTop: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#111827' }}>{p.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, color: '#374151', fontSize: 13 }}>
                  <img className="icon-205-98" src="/assets/figmaimages/figma_image_205_98.png" alt="" draggable="false" />
                  <span>
                    {p.rating} {Intl.NumberFormat('en-US').format(p.reviews)} reviews
                  </span>
                </div>
                <div style={{ color: '#6B7280', fontSize: 13 }}>{p.distance}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="separator-band" aria-hidden="true"></div>
        <BottomNav className="layer" />
      </div>
    </div>
  );
}
