"use client";

import React from "react";
import { MouseParallax } from "react-just-parallax";
import Image from "next/image";

function MouseFollow() {
  return (
    <>
      <div className="relative z-20 h-screen overflow-hidden ">
        {/* sky section */}
        <Image
          src="/assets/herosection/sky2.png"
          width={500}
          height={500}
          data-aos="fade-in"
          data-aos-duration="3000"
          className=" top-0 left-0 w-full h-full object-cover z-0"
          style={{ transform: "scale(1.1)" }}
          alt="header oro prestige"
        />

        {/* cloud section behind mountain */}
        {/* center cloud */}
        <MouseParallax
          enableOnTouchDevice={true}
          isAbsolutelyPositioned={true}
          strength="0.02"
        >
          <Image
            src="/assets/herosection/cloud6.avif"
            width={500}
            height={500}
            className="opacity-95 z-10 absolute left-[37%] top-[50%] -translate-x-2/4 -translate-y-2/4"
            style={{ transform: "scale(2)" }}
            alt="header oro prestige"
          />
        </MouseParallax>

        {/* <MouseParallax enableOnTouchDevice={true} isAbsolutelyPositioned={true} strength="0.02">
            <Image src="/assets/herosection/cloud5.avif" width={500} height={500} 
                className='opacity-95 z-10 absolute right-[7%] top-[5%] -translate-x-2/4 -translate-y-2/4'
                style={{ transform: 'scale(2)' }} 
                alt='header oro prestige' 
            />
        </MouseParallax> */}

        {/* everest section */}
        <MouseParallax
          enableOnTouchDevice={true}
          isAbsolutelyPositioned={true}
          strength="0.01"
        >
          <Image
            src="/assets/herosection/everest.png"
            width={500}
            height={500}
            data-aos="fade-in"
            data-aos-duration="3000"
            className="absolute  w-full h-full object-cover z-0"
            style={{ transform: "scale(1.05)" }}
            alt="header oro prestige"
          />
        </MouseParallax>

        {/* left clouds after mountain */}
        {/* <MouseParallax enableOnTouchDevice={true} isAbsolutelyPositioned={true} strength="0.02">
            <Image src="/assets/herosection/cloud3.avif" width={500} height={500} 
                className='opacity-95 z-10 absolute left-[30%] top-[2%] -translate-x-1/2 -translate-y-1/2'
                style={{ transform: 'scale(1)' }} 
                alt='header oro prestige' 
            />
        </MouseParallax>

        <MouseParallax enableOnTouchDevice={true} isAbsolutelyPositioned={true} strength="0.02">
            <Image src="/assets/herosection/cloud1.avif" width={500} height={500} 
                className='opacity-95 z-10 absolute -left-36 top-16'
                style={{ transform: 'scale(1.5)' }} 
                alt='header oro prestige' 
            />
        </MouseParallax> */}

        {/* germano section */}
        <MouseParallax
          enableOnTouchDevice={true}
          isAbsolutelyPositioned={true}
          strength="0.015"
        >
          <Image
            src="/assets/herosection/germano.png"
            width={500}
            height={500}
            className="absolute right-[5%] md:right-[15%] -bottom-[0%] -translate-x-1/2 -translate-y-1/2 h-full object-contain z-10"
            style={{ transform: "scale(3)" }}
            alt="header oro prestige"
          />
        </MouseParallax>

        {/* last cloud section */}
        <MouseParallax
          enableOnTouchDevice={true}
          isAbsolutelyPositioned={true}
          strength="0.03"
        >
          <Image
            src="/assets/herosection/wolkenrand.webp"
            width={500}
            height={500}
            className="opacity-95 z-10 absolute -bottom-[45rem] w-full h-full object-cover"
            style={{ transform: "scale(1.1)" }}
            alt="header oro prestige"
          />
          <Image
            src="/assets/herosection/wolkenrand.webp"
            width={500}
            height={500}
            className="opacity-95 z-10 absolute -bottom-[45rem] w-full h-full object-cover"
            style={{ transform: "scale(1.1)" }}
            alt="header oro prestige"
          />
        </MouseParallax>

        {/* glass section */}
        <div className="px-10 py-14 h-auto w-full lg:w-1/2 2xl:w-1/3 absolute bottom-0 left-0 lg:top-1/2 lg:left-[10%] lg:-translate-y-1/2 flex flex-col justify-center items-start gap-5">
          <Image
            src="/assets/herosection/cloud1.avif"
            width={500}
            height={500}
            className="opacity-95 z-0 absolute left-[0%] top-[40%] lg:top-[55%] -translate-x-2/4 -translate-y-2/4"
            style={{ transform: "scale(3)" }}
            alt="header oro prestige"
          />
          <p className="text-4xl uppercase text-stone-800 font-bold z-50">
            i am your personal <br /> mental coach
          </p>
          <p className="text-lg text-stone-800 font-medium z-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            hic dolore ut doloribus animi voluptas esse natus vitae.
          </p>
          <button
            type="button"
            className="w-1/2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-[0.5rem] text-sm px-5 py-2.5 text-center me-2 mb-2 z-50"
          >
            Contattami
          </button>
        </div>
      </div>
    </>
  );
}

export default MouseFollow;
