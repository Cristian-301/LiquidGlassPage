'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'

function DefaultButton({ text, link, dark, buttonClass }) {
  const [activeButton, setActiveButton] = useState(null);
  const router = useRouter();

  const handleButtonClick = () => {
    setActiveButton(link);

    const isSmallDevice = window.matchMedia('(max-width: 768px)').matches;
    const timeout = isSmallDevice ? 450 : 0;

    setTimeout(() => {
      // Redirect to the link after the animation
      if (link.startsWith('http')) {
        // window.location.href = link; 
        window.open(link, '_blank') // For external links
      } else {
        router.push(link); // For internal navigation
      }
    }, timeout);
  };

  return (
    <button 
      className={`page-link ${dark ? 'progress-button-light border-slate-50 text-slate-50' : 'border-black text-black progress-button-dark'} px-8 py-2 uppercase border text-center transition duration-300 ease-in-out  ${buttonClass !== '' ? buttonClass : 'w-full lg:w-1/2'}`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
}

export default DefaultButton;
