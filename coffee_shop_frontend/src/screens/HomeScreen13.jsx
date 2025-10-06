import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home-screen-1-3.css';

/**
 * PUBLIC_INTERFACE
 * HomeScreen13 renders the Figma "Home Screen (screen_1:3)" as a React component.
 * It imports the screen-specific CSS and initializes its JS interactions within a scoped effect.
 */
export default function HomeScreen13() {
  const navigate = useNavigate();

  useEffect(() => {
    // Load and run the screen-specific JS safely
    // We inline a minimal version of the original initializer to avoid polluting globals.
    // Original behavior: binds pulse interactions on like buttons, filter, and bottom nav.
    const cleanupFns = [];

    function pulse(el) {
      if (!el) return;
      el.style.transform = 'scale(0.97)';
      el.style.transition = 'transform 120ms ease';
      const t = setTimeout(() => { el.style.transform = 'scale(1)'; }, 120);
      cleanupFns.push(() => clearTimeout(t));
    }

    const likeGroups = document.querySelectorAll('.group-205-108, .group-205-109, .group-205-175, .group-205-187');
    likeGroups.forEach((el) => {
      const onClick = () => pulse(el);
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      };
      el.addEventListener('click', onClick);
      el.addEventListener('keydown', onKey);
      cleanupFns.push(() => {
        el.removeEventListener('click', onClick);
        el.removeEventListener('keydown', onKey);
      });
    });

    const filterBtn = document.querySelector('.frame-206-13');
    if (filterBtn) {
      const onClick = () => pulse(filterBtn);
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      };
      filterBtn.addEventListener('click', onClick);
      filterBtn.addEventListener('keydown', onKey);
      cleanupFns.push(() => {
        filterBtn.removeEventListener('click', onClick);
        filterBtn.removeEventListener('keydown', onKey);
      });
    }

    const nav = document.querySelector('.nav-205-169');
    if (nav) {
      const items = [
        { el: document.querySelector('.group-205-168'), type: 'home' },
        { el: document.querySelector('.frame-205-161'), type: 'favorites' },
        { el: document.querySelector('.frame-205-156'), type: 'bookmarks' },
        { el: document.querySelector('.frame-205-158'), type: 'profile' }
      ];
      items.forEach((item) => {
        if (!item.el) return;
        const onClick = () => {
          items.forEach((i) => {
            if (!i.el) return;
            if (i.type === 'home') {
              i.el.setAttribute('aria-current', 'page');
            } else {
              i.el.removeAttribute('aria-current');
            }
          });
          pulse(item.el);
        };
        const onKey = (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        };
        item.el.addEventListener('click', onClick);
        item.el.addEventListener('keydown', onKey);
        cleanupFns.push(() => {
          item.el.removeEventListener('click', onClick);
          item.el.removeEventListener('keydown', onKey);
        });
      });
    }

    // Wire navigation from a coffee item/card to Cafe screen
    const cafeTargets = [
      document.querySelector('.card-205-113 .group-205-111'), // Haus Coffee image group
      document.querySelector('.card-205-113 .frame-205-102'), // Haus Coffee details frame
      document.querySelector('.card-205-113') // entire card as fallback
    ].filter(Boolean);

    cafeTargets.forEach((target) => {
      target.style.cursor = 'pointer';
      const onClick = () => navigate('/screens/cafe');
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate('/screens/cafe');
        }
      };
      target.setAttribute('role', 'button');
      target.setAttribute('tabIndex', '0');
      target.addEventListener('click', onClick);
      target.addEventListener('keydown', onKey);
      cleanupFns.push(() => {
        target.removeEventListener('click', onClick);
        target.removeEventListener('keydown', onKey);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn && fn());
    };
  }, [navigate]);

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

          <div className="frame-206-13" role="button" tabIndex={0} aria-label="Filter">
            <div className="group-205-122" aria-hidden="true">
              <div className="line-205-118"></div>
              <div className="line-205-119"></div>
              <img className="ellipse-205-120" src="/assets/figmaimages/figma_image_205_120.png" alt="" draggable="false" />
              <div className="ellipse-205-121"></div>
            </div>
          </div>
        </div>

        <div className="layer text-203-70">Featured coffee shops</div>

        <div className="layer card card-205-112" style={{ position: 'absolute' }}>
          <div className="group-205-110">
            <img className="rect-203-72" src="/assets/figmaimages/figma_image_203_72.png" alt="Home Coffee Roasters image" draggable="false" />
            <div className="group-205-108" role="button" tabIndex={0} aria-label="Like">
              <img className="ellipse-205-84" src="/assets/figmaimages/figma_image_205_84.png" alt="" draggable="false" />
              <img className="icon-205-91" src="/assets/figmaimages/figma_image_205_91.png" alt="" draggable="false" />
            </div>
          </div>
          <div className="frame-205-101">
            <div className="text-204-76">Home Coffee Roasters</div>
            <div className="frame-205-100" aria-label="Rating">
              <img className="icon-205-98" src="/assets/figmaimages/figma_image_205_98.png" alt="" draggable="false" />
              <div className="text-205-94">4.5 1,200 reviews</div>
            </div>
            <div className="text-205-96">3.8 miles</div>
          </div>
        </div>

        <div className="layer card card-205-113" style={{ position: 'absolute' }}>
          <div className="group-205-111">
            <img className="rect-203-73" src="/assets/figmaimages/figma_image_203_73.png" alt="Haus Coffee image" draggable="false" />
            <div className="group-205-109" role="button" tabIndex={0} aria-label="Like">
              <div className="ellipse-205-92"></div>
              <div className="icon-205-93"></div>
            </div>
          </div>
          <div className="frame-205-102">
            <div className="text-205-103">Haus Coffee</div>
            <div className="frame-205-104" aria-label="Rating">
              <img className="icon-205-105" src="/assets/figmaimages/figma_image_205_98.png" alt="" draggable="false" />
              <div className="text-205-106">4.4 429 reviews</div>
            </div>
            <div className="text-205-107">2.5 miles</div>
          </div>
        </div>

        <div className="layer card card-205-172" style={{ position: 'absolute' }}>
          <div className="group-205-173">
            <div className="rect-205-174"></div>
            <div className="group-205-175" role="button" tabIndex={0} aria-label="Like">
              <div className="ellipse-205-176"></div>
              <div className="icon-205-177"></div>
            </div>
          </div>
          <div className="frame-205-178">
            <div className="text-205-179">Home Coffee Roasters</div>
            <div className="frame-205-180" aria-label="Rating">
              <img className="icon-205-181" src="/assets/figmaimages/figma_image_205_98.png" alt="" draggable="false" />
              <div className="text-205-182">4.5 1,200 reviews</div>
            </div>
            <div className="text-205-183">3.8 miles</div>
          </div>
        </div>

        <div className="layer card card-205-184" style={{ position: 'absolute' }}>
          <div className="group-205-185">
            <div className="rect-205-186"></div>
            <div className="group-205-187" role="button" tabIndex={0} aria-label="Like">
              <div className="ellipse-205-188"></div>
              <div className="icon-205-189"></div>
            </div>
          </div>
          <div className="frame-205-190">
            <div className="text-205-191">Haus Coffee</div>
            <div className="frame-205-192" aria-label="Rating">
              <img className="icon-205-193" src="/assets/figmaimages/figma_image_205_98.png" alt="" draggable="false" />
              <div className="text-205-194">4.4 429 reviews</div>
            </div>
            <div className="text-205-195">2.5 miles</div>
          </div>
        </div>

        <div className="layer nav-205-169" role="navigation" aria-label="Bottom Navigation">
          <div className="group-205-168" aria-current="page">
            <img className="rect-205-165" src="/assets/figmaimages/figma_image_205_165.png" alt="" draggable="false" />
            <div className="frame-205-153" aria-hidden="false">
              <div className="group-205-166">
                <img className="icon-205-154" src="/assets/figmaimages/figma_image_205_154.png" alt="" draggable="false" />
                <div className="icon-205-155"></div>
              </div>
            </div>
          </div>

          <div className="frame-205-161" role="button" tabIndex={0} aria-label="Favorites">
            <img className="icon-205-162" src="/assets/figmaimages/figma_image_205_162.png" alt="" draggable="false" />
          </div>

          <div className="frame-205-156" role="button" tabIndex={0} aria-label="Bookmarks">
            <img className="icon-205-157" src="/assets/figmaimages/figma_image_205_157.png" alt="" draggable="false" />
          </div>

          <div className="frame-205-158" role="button" tabIndex={0} aria-label="Profile">
            <div className="icon-205-159"></div>
            <img className="icon-205-160" src="/assets/figmaimages/figma_image_205_160.png" alt="" draggable="false" />
          </div>
        </div>
      </div>
    </div>
  );
}
