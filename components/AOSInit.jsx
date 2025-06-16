'use client'; // 👈 VERY important

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ✅ you need the CSS too

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800, // You can customize options
      once: true,    // Animate only once
    });
  }, []);

  return null; // no UI
}
