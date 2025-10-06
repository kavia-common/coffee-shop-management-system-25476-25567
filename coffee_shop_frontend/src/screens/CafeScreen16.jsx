import React, { useEffect } from 'react';
import './cafe-screen-1-6.css';
import { attachImgErrorLogging } from './useImageErrorLogger';

/**
 * PUBLIC_INTERFACE
 * CafeScreen16 renders the Figma "Cafe Screen (screen_1:6)" as a React component.
 * It imports CSS and wires up interactions in a scoped effect.
 */
export default function CafeScreen16() {
  useEffect(() => {
    // Attach image error logging to help detect 404s during development
    attachImgErrorLogging(document);
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
      const onClick = () => pulse(backBtn);
      const onKey = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
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

    return () => {
      cleanupFns.forEach((fn) => fn && fn());
    };
  }, []);

  return (
    <div className="viewport">
      <div className="artboard" role="main" aria-label="Cafe Screen Artboard">
        <img
          className="layer layer-205-198 rect-1748"
          src="/assets/figmaimages/figma_image_205_198.png"
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

        <div className="layer frame frame-207-63" aria-label="Cafe info">
          <div className="text t-207-40">Haus Coffee</div>
          <div className="row row-207-59" aria-label="Rating">
            <img
              className="star-207-60"
              src="/assets/figmaimages/figma_image_207_60.png"
              alt=""
              draggable="false"
            />
            <div className="text t-207-61">4.4 429 reviews</div>
          </div>
          <div className="text t-207-62">San Francisco, CA</div>
        </div>

        <div className="layer frame frame-208-24" role="region" aria-label="Menu list">
          <div className="menu-card group-207-91">
            <div className="card-bg rect-207-64" aria-hidden="true"></div>

            <div className="add-btn group-207-79" role="button" tabIndex={0} aria-label="Add Cafè mocha to order">
              <img className="add-ellipse img-207-80" src="/assets/figmaimages/figma_image_207_80.png" alt="" draggable="false" />
              <div className="plus icon-207-87" aria-hidden="true">
                <span className="v-207-88"></span>
                <span className="h-207-89"></span>
              </div>
            </div>

            <div className="menu-item group-207-90">
              <img className="thumb img-207-65" src="/assets/figmaimages/figma_image_207_65.png" alt="Cafè mocha" draggable="false" />
              <div className="details frame-207-83">
                <div className="stack frame-207-82">
                  <div className="title t-207-66">Cafè mocha</div>
                  <div className="desc t-207-67">A chocolate-flavored warm beverage that is a variant of a café latte</div>
                </div>
                <div className="price t-207-78">$3.00</div>
              </div>
            </div>
          </div>

          <div className="menu-card group-208-10">
            <div className="card-bg rect-208-11" aria-hidden="true"></div>

            <div className="add-btn group-208-12" role="button" tabIndex={0} aria-label="Add Caramel macchiato to order">
              <div className="add-ellipse ellipse-208-13"></div>
              <div className="plus icon-208-14" aria-hidden="true">
                <span className="v-208-15"></span>
                <span className="h-208-16"></span>
              </div>
            </div>

            <div className="menu-item group-208-17">
              <div className="thumb rect-208-18" aria-hidden="true"></div>
              <div className="details frame-208-19">
                <div className="stack frame-208-20">
                  <div className="title t-208-21">Caramel machiatto</div>
                  <div className="desc t-208-22">Steamed milk marked with an espresso and  caramel topping</div>
                </div>
                <div className="price t-208-23">$3.50</div>
              </div>
            </div>
          </div>
        </div>

        <div className="layer rect-208-30" aria-hidden="true"></div>
      </div>
    </div>
  );
}
