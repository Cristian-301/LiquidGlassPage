'use client';

import { useLenis } from 'lenis/react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollManager() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) return;

    // Scroll to top immediately when the route (page) changes
    lenis.scrollTo(0, {
      immediate: true,
      lock: true,
    });

    // Show loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
      loadingOverlay.classList.add('active');

      // Hide overlay after 500ms (or your preferred time)
      setTimeout(() => {
        loadingOverlay.classList.remove('active');
      }, 500);
    }
  }, [pathname, lenis]); // Re-run when URL path changes

  return null; // No visible UI
}
