"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function MultyImageScroll({ images, title, content, contentBackgroundColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000); // More time without fading needed (can be tuned)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex bg-black">
      <div className="w-2/5 h-screen sticky top-0 hidden md:block overflow-hidden">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="lifestyle"
            width={100}
            height={100}
            className={`object-cover w-full h-full absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            priority={index === 0} // preload first image
          />
        ))}
      </div>
      <div className="md:w-3/5 w-full relative flex flex-col items-center ">
        <div className="w-full h-full inset-0 ">
          <div className={`relative text-white h-full pt-16 text-center flex flex-col items-center ${contentBackgroundColor}`}>
            <h2 className="text-4xl text-white font-semibold">{title}</h2>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}
