import React, { useEffect } from 'react';
import './notes-delete-after-reading-8-3.css';

/**
 * PUBLIC_INTERFACE
 * NotesScreen83 renders the Figma "Notes [Delete after reading] (screen_8:3)".
 */
export default function NotesScreen83() {
  useEffect(() => {
    // No interactions defined; hook reserved for future use
  }, []);

  return (
    <div className="viewport">
      <main className="artboard" role="main" aria-label="Notes [Delete after reading] Artboard">
        <section className="layer frame-8-18" aria-label="Notes content">
          <h1 className="text t-8-4">Notes ✏️</h1>
          <p className="text t-8-5">
            • Icons are from @ Feather Icons and Flaticon
            <br /><br />
            • Raleway can be downloaded for free @ Google Fonts
          </p>
        </section>
      </main>
    </div>
  );
}
