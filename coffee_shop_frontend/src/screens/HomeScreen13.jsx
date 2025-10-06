import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './home-screen-1-3.css';
import './shared-bottom-nav.css';
import { attachImgErrorLogging } from './useImageErrorLogger';
import BottomNav from '../components/BottomNav';
import { products } from '../data/products';
import { useFavorites } from '../context/FavoritesContext';

/**
 * PUBLIC_INTERFACE
 * HomeScreen13 renders the Figma "Home Screen (screen_1:3)" as a React component.
 * It now renders product cards dynamically and uses a shared BottomNav.
 */
export default function HomeScreen13() {
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    attachImgErrorLogging(document);
  }, []);

  // pick the two best "featured" cards that have real images (avoid placeholders)
  const featured = useMemo(() => {
    const withImages = products.filter(p => !!p.image);
    // Prioritize by rating then reviews
    return withImages
      .sort((a, b) => (b.rating - a.rating) || (b.reviews - a.reviews))
      .slice(0, 2);
  }, []);

  const handleCardClick = (p) => {
    navigate('/screens/cafe', { state: { productId: p.id } });
  };

  const HeartButton = ({ id, filledVariant }) => {
    const fav = isFavorite(id);
    return (
      <button
        type="button"
        className={filledVariant ? 'group-205-109' : 'group-205-108'}
        aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
        aria-pressed={fav}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(id);
        }}
        style={{ position: 'absolute', left: filledVariant ? 127 : 124, top: 0, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 3, background: 'transparent', border: 'none', padding: 0 }}
      >
        {/* circular plate behind heart */}
        {filledVariant ? (
          <div className="ellipse-205-92" style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(17,24,39,0.08)' }} />
        ) : (
          <img className="ellipse-205-84" src="/assets/figmaimages/figma_image_205_84.png" alt="" draggable="false" />
        )}
        {/* heart icon - switch between outline (default asset) and a filled style via CSS box */}
        {fav ? (
          <img
            className="icon-205-91"
            src="/assets/figmaimages/figma_image_205_91.png"
            alt=""
            draggable="false"
            style={{ filter: 'invert(17%) sepia(8%) saturate(533%) hue-rotate(173deg) brightness(93%) contrast(90%)' }}
          />
        ) : (
          <img className="icon-205-91" src="/assets/figmaimages/figma_image_205_91.png" alt="" draggable="false" />
        )}
      </button>
    );
  };

  return (
    <div className="viewport">
      <div className="artboard" role="main" aria-label="Home Screen Artboard">
        <img
          className="layer img-203-66"
          src="/assets/figmaimages/figma_image_203_66.png"
          alt=""
          draggable="false"
        />

        <div className="layer text-203-37" role="heading" aria-level="1">
          <span>Find a coffee shop</span><br />
          <span>anywhere</span>
        </div>

        <div className="layer frame-206-16" role="search" aria-label="Search content">
          <div className="frame-206-15">
            <div className="frame-206-14">
              <div className="iconframe-205-204" aria-hidden="true">
                <img
                  className="icon-205-205"
                  src="/assets/figmaimages/figma_image_205_205.png"
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="text-203-71">Search</div>
            </div>
          </div>

          <div className="frame-206-13 btn btn-secondary" role="button" tabIndex={0} aria-label="Filter">
            <div className="group-205-122" aria-hidden="true">
              <div className="line-205-118"></div>
              <div className="line-205-119"></div>
              <img className="ellipse-205-120" src="/assets/figmaimages/figma_image_205_120.png" alt="" draggable="false" />
              <div className="ellipse-205-121"></div>
            </div>
          </div>
        </div>

        <div className="layer text-203-70">Featured coffee shops</div>

        {/* Dynamic featured cards: position them to match Figma */}
        {featured[0] && (
          <div
            className="layer card card-205-112"
            style={{ position: 'absolute' }}
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick(featured[0])}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(featured[0])}
            aria-label={`Open ${featured[0].name}`}
          >
            <div className="group-205-110" style={{ position: 'relative', zIndex: 1 }}>
              <img className="rect-203-72" src={featured[0].image} alt={`${featured[0].name} image`} draggable="false" />
              <HeartButton id={featured[0].id} />
            </div>
            <div className="frame-205-101">
              <div className="text-204-76">{featured[0].name}</div>
              <div className="frame-205-100" aria-label="Rating">
                <img className="icon-205-98" src="/assets/figmaimages/figma_image_205_98.png" alt="" draggable="false" />
                <div className="text-205-94">
                  {featured[0].rating} {Intl.NumberFormat('en-US').format(featured[0].reviews)} reviews
                </div>
              </div>
              <div className="text-205-96">{featured[0].distance}</div>
            </div>
          </div>
        )}

        {featured[1] && (
          <div
            className="layer card card-205-113"
            style={{ position: 'absolute' }}
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick(featured[1])}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleCardClick(featured[1])}
            aria-label={`Open ${featured[1].name}`}
          >
            <div className="group-205-111" style={{ position: 'relative', zIndex: 1 }}>
              <img className="rect-203-73" src={featured[1].image} alt={`${featured[1].name} image`} draggable="false" />
              <HeartButton id={featured[1].id} filledVariant />
            </div>
            <div className="frame-205-102">
              <div className="text-205-103">{featured[1].name}</div>
              <div className="frame-205-104" aria-label="Rating">
                <img className="icon-205-105" src="/assets/figmaimages/figma_image_205_98.png" alt="" draggable="false" />
                <div className="text-205-106">
                  {featured[1].rating} {Intl.NumberFormat('en-US').format(featured[1].reviews)} reviews
                </div>
              </div>
              <div className="text-205-107">{featured[1].distance}</div>
            </div>
          </div>
        )}

        {/* Separator band behind BottomNav to match Figma layering */}
        <div className="separator-band" aria-hidden="true"></div>
        <BottomNav className="layer" />
      </div>
    </div>
  );
}
