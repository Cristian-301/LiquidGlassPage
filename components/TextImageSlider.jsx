'use client'

import Image from "next/image";
import DefaultButton from "./DefaultButton";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function TextImageSlider({ content, leftContainerClass, rightContainerClass, }) {
    const [currentContent, setCurrentContent] = useState(0);



  const handlePrev = () => {
    if (currentContent === 0) {
        setCurrentContent(content.length - 1)
    } else {
        setCurrentContent((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentContent === content.length - 1) {
        setCurrentContent(0)
    } else {
        setCurrentContent((prev) => prev + 1);
    }
  };


//   const preloadImages = content.map((item, index) => (
//     <Image
//       key={`preload-${index}`}
//       src={item.image}
//       alt={`preload-${index}`}
//       width={1}
//       height={1}
//       style={{ display: "none" }}
//       priority={false}
//     />
//   ));

  return (
    <>
    {/* Desktop */}
    <div className="sm:flex hidden h-screen">
      <div className={`w-1/2 ${leftContainerClass} flex flex-col justify-around items-center p-20`}>
        <h3 className="font-bold text-4xl">{content[currentContent].title}</h3>
        <p className="text-xl">
          {content[currentContent].description}
        </p>
        <DefaultButton dark={true} text="Contattaci" link="/contatti" />
      </div>
      <div className={`w-1/2 ${rightContainerClass}`}>
        <div className="flex flex-col justify-around items-center h-full">
          <div className="flex flex-col items-center">
          <div className="relative w-[400px] h-[400px]">
            {content.map((item, index) => (
                <Image
                key={`slide-img-${index}`}
                src={item.image}
                alt={`slide ${index}`}
                width={400}
                height={400}
                className={`
                    absolute top-0 left-0 w-full h-full object-cover aspect-square rounded-full
                    transition-opacity duration-700 ease-in-out
                    ${index === currentContent ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                `}
                priority={index === 0}
                />
            ))}
            </div>
            <p className="text-lg mt-10 w-1/2 text-center mx-auto">
             {content[currentContent].imageDescription}
            </p>
          </div>
          <div className="flex justify-between w-full px-20 text-4xl">
            <button onClick={handlePrev}>
                <FaChevronLeft />
            </button>
            <button onClick={handleNext}>
                <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile */}
    <div className={`sm:hidden block h-screen ${rightContainerClass}`}>
        <div className="flex flex-col items-center justify-around h-full">
            <div className="flex flex-col items-center">
                <h3 className="font-bold text-2xl mb-5">{content[currentContent].title}</h3>
                <div className="relative w-[200px] h-[200px]">
                    {content.map((item, index) => (
                        <Image
                            key={`mobile-slide-img-${index}`}
                            src={item.image}
                            alt={`mobile slide ${index}`}
                            width={200}
                            height={200}
                            className={`
                                absolute top-0 left-0 w-full h-full object-cover aspect-square rounded-full
                                transition-opacity duration-700 ease-in-out
                                ${index === currentContent ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                            `}
                            priority={index === 0}
                        />
                    ))}
                </div>
                <p className="text-lg mt-10 w-1/2 text-center mx-auto">
                {content[currentContent].imageDescription}
                </p>
            </div>
            <div className="flex justify-between w-full px-5">
                <button className="text-2xl" onClick={handlePrev}>
                    <FaChevronLeft />
                </button>
                <p className="text-center px-5">
                    {content[currentContent].description}
                </p>
                <button className="text-2xl" onClick={handleNext}>
                    <FaChevronRight />
                </button>
            </div>
            <DefaultButton dark={false} text="Contattaci" link="/contatti" />
        </div>
    </div>
    {/* <div style={{ display: 'none' }}>{preloadImages}</div> */}
    </>
  );
}
