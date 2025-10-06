import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * FavoritesContext provides state and actions to manage favorite items across the app.
 * It persists to localStorage for simple durability.
 */
const FavoritesContext = createContext({
  favorites: [],
  isFavorite: (_id) => false,
  toggleFavorite: (_id) => {},
  clearFavorites: () => {},
});

// Key for localStorage
const LS_KEY = 'kavia.coffee.favorites.v1';

/**
 * PUBLIC_INTERFACE
 * FavoritesProvider wraps application UI and provides favorites state.
 */
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = window.localStorage.getItem(LS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(LS_KEY, JSON.stringify(favorites));
    } catch {
      // ignore persistence errors
    }
  }, [favorites]);

  const isFavorite = useCallback(
    (id) => favorites.includes(id),
    [favorites]
  );

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      return [...prev, id];
    });
  }, []);

  const clearFavorites = useCallback(() => setFavorites([]), []);

  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorite, clearFavorites }),
    [favorites, isFavorite, toggleFavorite, clearFavorites]
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

/**
 * PUBLIC_INTERFACE
 * useFavorites hook to access favorites state and actions.
 */
export function useFavorites() {
  return useContext(FavoritesContext);
}

export default FavoritesContext;
