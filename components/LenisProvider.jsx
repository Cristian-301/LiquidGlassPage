'use client';

import { ReactLenis } from 'lenis/react';

export default function LenisProvider({ children }) {
  return (
    <ReactLenis 
        root
        options={{
            smoothWheel: true,
            lerp: 0.050,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            syncTouch: true,
            syncTouchLerp: 0.1,
            touchInertiaMultiplier: 50,
            wheelMultiplier: 0.75,
            touchMultiplier: 0.75,
            normalizeWheel: false,
            infinite: false,
            autoResize: true,
          }}
    >
      {children}
    </ReactLenis>
  );
}

