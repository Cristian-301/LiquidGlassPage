'use client'

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export default function HeroSection({backgroundImg, title, description, buttonName, handleClickForm}) {
    const nextSectionRef = useRef(null);
    const scrollToNextSection = () => {
        nextSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
    return (
        <div className="relative z-20 h-screen overflow-hidden ">
      
        <div className="h-screen bg-black z-30 relative opacity-50"/>
          <Image
             src={backgroundImg}
             alt="background"
             className="absolute top-0 left-0 w-full h-full object-cover"
             width={600}
             height={600}
             priority
          />
        
          <div
            className="absolute bottom-0 left-0 text-left pb-28 px-8 md:p-32 z-40"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h2 className="text-4xl md:text-6xl text-white font-semibold drop-shadow-2xl mb-10">
                {title}
            </h2>
            <div className="text-white font-semibold drop-shadow-2xl my-5 md:w-4/5 text-lg">
                {description} 
            </div>
            {buttonName && <button onClick={handleClickForm} className={`text-white text-sm md:text-base px-3 py-3 md:px-6 font-semibold rounded-lg bg-[#00418F] hover:bg-blue-700 shadow-2xl transition-all duration-300 `}>
                {buttonName}
            </button>}
          </div>
         
      </div>
    );
}