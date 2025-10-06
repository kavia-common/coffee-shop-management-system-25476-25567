import React, { useEffect, useMemo } from 'react';
import './cafe-screen-1-6.css';
import './shared-bottom-nav.css';
import { attachImgErrorLogging } from './useImageErrorLogger';
import { useLocation, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { products, getProductById } from '../data/products';
import { useFavorites } from '../context/FavoritesContext';

/**
 * PUBLIC_INTERFACE
 * CafeScreen16 renders the Figma "Cafe Screen (screen_1:6)" as a React component.
 * It reads the selected product from route state or query and displays dynamic content.
 */
export default function CafeScreen16() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    attachImgErrorLogging(document);
  }, []);

  const selected = useMemo(() => {
    // from state
    const stateId = location?.state?.productId;
    // from query
    const searchParams = new URLSearchParams(location.search);
    const queryId = searchParams.get('productId');
    const id = stateId || queryId;
    return getProductById(id) || products[0];
  }, [location]);

  useEffect(() => {
    const cleanupFns = [];

    function pulse(el) {
      if (!el) return;
      el.style.transform = 'scale(0.97)';
      el.style.transition = 'transform 120ms ease';
      const t = setTimeout(() => { el.style.transform = 'scale(1)'; }, 120);
      cleanupFns.push(() => clearTimeout(t));
    }

    const backBtn = document.querySelector('.chevron-left-207-48');
    if (backBtn) {
      const onClick = () => {
        pulse(backBtn);
        navigate(-1);
      };
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(-1);
        }
      };
      backBtn.addEventListener('click', onClick);
      backBtn.addEventListener('keydown', onKey);
      cleanupFns.push(() => {
        backBtn.removeEventListener('click', onClick);
        backBtn.removeEventListener('keydown', onKey);
      });
    }

    const categoryFrames = document.querySelectorAll('.group-207-57 .frame');
    categoryFrames.forEach((frame) => {
      const onClick = () => {
        categoryFrames.forEach((f) => f.setAttribute('aria-pressed', 'false'));
        frame.setAttribute('aria-pressed', 'true');
        pulse(frame);
      };
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      };
      frame.addEventListener('click', onClick);
      frame.addEventListener('keydown', onKey);
      cleanupFns.push(() => {
        frame.removeEventListener('click', onClick);
        frame.removeEventListener('keydown', onKey);
      });
    });

    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach((btn) => {
      const onClick = () => pulse(btn);
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      };
      btn.addEventListener('click', onClick);
      btn.addEventListener('keydown', onKey);
      cleanupFns.push(() => {
        btn.removeEventListener('click', onClick);
        btn.removeEventListener('keydown', onKey);
      });
    });

    return () => cleanupFns.forEach((fn) => fn && fn());
  }, [navigate]);

  const HeartInline = ({ pid, style = {} }) => {
    const fav = isFavorite(pid);
    return (
      <button
        type="button"
        aria-label={fav ? 'Remove from favorites' : 'Add to favorites'}
        aria-pressed={fav}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(pid);
        }}
        style={{
          position: 'absolute',
          right: -6,
          top: -6,
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 4,
          background: 'transparent',
          border: 'none',
          padding: 0,
          ...style,
        }}
      >
        <img className="ellipse-205-84" src="/assets/figmaimages/figma_image_205_84.png" alt="" draggable="false" />
        <img
          className="icon-205-91"
          src="/assets/figmaimages/figma_image_205_91.png"
          alt=""
          draggable="false"
          style={fav ? { filter: 'invert(17%) sepia(8%) saturate(533%) hue-rotate(173deg) brightness(93%) contrast(90%)' } : undefined}
        />
      </button>
    );
  };

  return (
    <div className="viewport">
      <div className="artboard" role="main" aria-label="Cafe Screen Artboard">
        {/* Hero uses a valid image; if selected product has an image, prefer that */}
        <img
          className="layer layer-205-198 rect-1748"
          src={selected?.image || '/assets/figmaimages/figma_image_205_198.png'}
          alt="Cafe hero"
          draggable="false"
        />
        <div className="layer layer-205-199 rect-1749" aria-hidden="true"></div>

        <div className="layer group group-205-203" aria-hidden="true">
          <img
            className="ellipse ellipse-205-200"
            src="/assets/figmaimages/figma_image_205_200.png"
            alt=""
            draggable="false"
          />
          <div className="ellipse ellipse-205-201"></div>
          <div className="ellipse ellipse-205-202"></div>
        </div>

        {/* Back button at the top area; no top navbar present */}
        <div className="layer icon-btn chevron-left-207-48" role="button" tabIndex={0} aria-label="Back">
          <span className="chevron-vector-207-49" aria-hidden="true"></span>
        </div>

        <div className="layer group group-207-57" role="group" aria-label="Categories">
          <div className="frame frame-207-34" role="button" tabIndex={0} aria-pressed="true" aria-label="Coffee category">
            <div className="icon-24 icon-207-35">
              <img
                src="/assets/figmaimages/figma_image_207_36.png"
                alt=""
                draggable="false"
              />
            </div>
            <div className="text t-207-37">Coffee</div>
          </div>

          <div className="frame frame-207-28" role="button" tabIndex={0} aria-pressed="false" aria-label="Drinks category">
            <div className="icon-24 icon-207-19">
              <img
                src="/assets/figmaimages/figma_image_207_20.png"
                alt=""
                draggable="false"
              />
            </div>
            <div className="text t-207-31">Drinks</div>
          </div>

          <div className="frame frame-207-24" role="button" tabIndex={0} aria-pressed="false" aria-label="Food category">
            <div className="icon-24 icon-207-17">
              <img
                src="/assets/figmaimages/figma_image_207_18.png"
                alt=""
                draggable="false"
              />
            </div>
            <div className="text t-207-27">Food</div>
          </div>
        </div>

        {/* Cafe info uses selected product */}
        <div className="layer frame frame-207-63" aria-label="Cafe info">
          <div className="text t-207-40">{selected?.name || 'Haus Coffee'}</div>
          <div className="row row-207-59" aria-label="Rating">
            <img
              className="star-207-60"
              src="/assets/figmaimages/figma_image_207_60.png"
              alt=""
              draggable="false"
            />
            <div className="text t-207-61">
              {selected?.rating ?? 4.4} {Intl.NumberFormat('en-US').format(selected?.reviews ?? 429)} reviews
            </div>
          </div>
          <div className="text t-207-62">San Francisco, CA</div>
        </div>

        {/* Menu list: bind two items to real images from data source */}
        <div className="layer frame frame-208-24" role="region" aria-label="Menu list">
          {/* Card 1: cafe mocha from products */}
          <div className="menu-card group-207-91" style={{ zIndex: 2 }}>
            <div className="card-bg rect-207-64" aria-hidden="true"></div>

            <div className="add-btn group-207-79" role="button" tabIndex={0} aria-label={`Add ${products[2].name} to order`}>
              <img className="add-ellipse img-207-80" src="/assets/figmaimages/figma_image_207_80.png" alt="" draggable="false" />
              <div className="plus icon-207-87" aria-hidden="true">
                <span className="v-207-88"></span>
                <span className="h-207-89"></span>
              </div>
            </div>

            <div className="menu-item group-207-90" style={{ position: 'relative' }}>
              <img className="thumb img-207-65" src={products[2].image} alt={products[2].name} draggable="false" />
              <HeartInline pid={products[2].id} />
              <div className="details frame-207-83">
                <div className="stack frame-207-82">
                  <div className="title t-207-66">{products[2].name}</div>
                  <div className="desc t-207-67">A chocolate-flavored warm beverage that is a variant of a café latte</div>
                </div>
                <div className="price t-207-78">${products[2].price.toFixed(2)}</div>
              </div>
            </div>
          </div>

          {/* Card 2: caramel macchiato with a valid image */}
          <div className="menu-card group-208-10" style={{ zIndex: 2 }}>
            <div className="card-bg rect-208-11" aria-hidden="true"></div>

            <div className="add-btn group-208-12" role="button" tabIndex={0} aria-label={`Add ${products[3].name} to order`}>
              <div className="add-ellipse ellipse-208-13"></div>
              <div className="plus icon-208-14" aria-hidden="true">
                <span className="v-208-15"></span>
                <span className="h-208-16"></span>
              </div>
            </div>

            <div className="menu-item group-208-17" style={{ position: 'relative' }}>
              <img className="thumb img-207-65" src={products[3].image} alt={products[3].name} draggable="false" />
              <HeartInline pid={products[3].id} />
              <div className="details frame-208-19">
                <div className="stack frame-208-20">
                  <div className="title t-208-21">{products[3].name}</div>
                  <div className="desc t-208-22">Steamed milk marked with an espresso and caramel topping</div>
                </div>
                <div className="price t-208-23">${products[3].price.toFixed(2)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient band behind BottomNav */}
        <div className="layer rect-208-30" aria-hidden="true"></div>
        <BottomNav className="layer" />
      </div>
    </div>
  );
}
