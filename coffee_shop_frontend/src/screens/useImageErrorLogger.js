 // PUBLIC_INTERFACE
 export function attachImgErrorLogging(root = document) {
   /**
    * Attach a one-time error listener to all <img> in the provided root.
    * Logs a clear warning in dev console when an image fails to load.
    */
   if (!root) return;
   const imgs = root.querySelectorAll('img');
   imgs.forEach((img) => {
     if (img.__kaviaErrorHookAttached) return;
     img.addEventListener('error', () => {
       // eslint-disable-next-line no-console
       console.warn('[assets] Image failed to load:', {
         alt: img.alt,
         src: img.currentSrc || img.src,
         className: img.className,
       });
     }, { once: true });
     img.__kaviaErrorHookAttached = true;
   });
 }
