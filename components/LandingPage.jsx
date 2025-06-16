"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GlassCard } from "@developer-hub/liquid-glass";
import BgImage from "@/public/assets/herosection/4.png";
import Snippets from "@/components/Snippets";

const ImageFollow = () => {
  const containerRef = useRef(null);
  const [imageLeft, setImageLeft] = useState("10%");
  const [rotateImage, setRotateImage] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections =
      containerRef.current?.querySelectorAll('div[id^="section"]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const left = [
              "section1",
              "section3",
              "section5",
              "section7",
            ].includes(id)
              ? "20%"
              : "80%";
            setImageLeft(left);
            setRotateImage(id === "section5");
          }
        });
      },
      { threshold: 0.5 }
    );

    sections?.forEach((section) => observer.observe(section));
    return () => sections?.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    let timeout;
    const handleScrollStop = () => {
      timeout = setTimeout(() => {
        const currentSection = document.querySelector(
          `div[id^="section"]:is(:hover, :focus, :active)`
        );
        if (currentSection && width > 1024) {
          currentSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    };

    window.addEventListener("scroll", handleScrollStop);
    return () => {
      window.removeEventListener("scroll", handleScrollStop);
      clearTimeout(timeout);
    };
  }, [width]);

  return (
    <div
      ref={containerRef}
      className="z-40"
      style={{
        backgroundImage: `url(${BgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fixed image */}

      {/* GlassCard */}
      <GlassCard
      shadowMode={false}
        style={{
          position: "fixed",
          top: "50%",
          left: imageLeft,
          transform: `translate(-50%, -50%) ${
            rotateImage ? "rotateY(180deg)" : ""
          }`,
          transition: "left 1s ease, transform 1s",
        }}
        cornerRadius={50}
        className=""
      >
        <div className="flex flex-col items-center text-center space-y-4 p-5 h-[30rem] w-[30rem]">
        </div>
      </GlassCard>

      {/* Sections */}
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          id={`section${n}`}
          className={`h-screen text-slate-50 flex items-center ${
            n % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="w-full lg:w-2/3 text-left lg:pe-56 lg:px-28 p-4">
            {n === 1 && <h2>Section 1</h2>}
            {n === 2 && <h2>Section 2</h2>}
            {n === 3 && <h2>Section 3</h2>}
            {n === 4 && <h2>Section 4</h2>}
            {n === 5 && <h2>Section 5</h2>}

            {n === 1 && 
            <div className="h-screen text-slate-50 flex items-start justify-center">
              <h1 className="text-7xl">Section 1</h1>
            </div>
            }
            
            {n === 2 && <Snippets>
              {`
              const Snippets = () => {
                return (
                  <div>
                    <h1>Snippets</h1>
                  </div>
                );
              };
              `}
            </Snippets>}
            {n === 3 && <Snippets>
              {`
              const Snippets = () => {
                return (
                  <div>
                    <h1>Snippets</h1>
                  </div>
                );
              };
              `}
            </Snippets>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageFollow;
