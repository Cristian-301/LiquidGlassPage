"use client";

import React, { useEffect, useRef, useState } from "react";
import { GlassCard } from "@developer-hub/liquid-glass";
import BgImage from "@/public/assets/herosection/surf.png";
import Snippets from "@/components/Snippets";

const ImageFollow = () => {
  const containerRef = useRef(null);
  const [imageLeft, setImageLeft] = useState("120%");
  const [rotateImage, setRotateImage] = useState(false);
  const [width, setWidth] = useState(0);
  const [isEnteringSection1, setIsEnteringSection1] = useState(false);

  const [currentSection, setCurrentSection] = useState(null);

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

            if (id === "section1") {
              setIsEnteringSection1(true);
              setTimeout(() => setIsEnteringSection1(false), 1000); // Reset after animation
            }          

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
            setCurrentSection(id);
            console.log(id);
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
        backgroundSize: "contain",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
      }}
    >

      {/* GlassCard
      {currentSection !== "section3" && <GlassCard
      shadowMode={false}
        style={{
          position: "fixed",
          top: "50%",
          left: imageLeft,
          transform: `translate(-50%, -50%) ${
            rotateImage ? "rotateY(180deg)" : ""
          } ${isEnteringSection1 ? "translateX(0vw)" : ""}`,
          transition: isEnteringSection1
          ? "transform 3s ease-out, left 3s ease"
          : "left 1s ease, transform 1s ease",
        }}
      >
        <div className="flex flex-col justify-center items-center text-center space-y-4 p-5 h-[30rem] w-[30rem]">
          <h3 className="text-3xl font-bold">Default card</h3>
          <p className="text-lg">A sleek glass-style card with built-in animations. Use this as a base to create beautiful, modern UI elements.</p>
        </div>
      </GlassCard>}

     {currentSection === "section3" && 
     <GlassCard
        style={{
          position: "fixed",
          top: "50%",
          left: imageLeft,
          transform: `translate(-50%, -50%) ${
            rotateImage ? "rotateY(180deg)" : ""
          }`,
          transition: "left 1s ease, transform 1s",
        }}
        displacementScale={100}
        blurAmount={0.01}
        cornerRadius={10}
        padding="8px 16px"
        onClick={() => console.log('Glass button clicked!')}
      >
        <span className="text-white font-medium">Get Started</span>
      </GlassCard>
      }  */}

<GlassCard
  shadowMode={currentSection === "section4"}
  style={{
    position: "fixed",
    top: "50%",
    left: imageLeft,
    transform: `translate(-50%, -50%) ${rotateImage ? "rotateY(180deg)" : ""}`,
    transition: "all 0.5s ease-in-out", // Smooth everything!
    width:
      currentSection === "section3" ? "auto" : "30rem",
    height:
      currentSection === "section3" ? "auto" : "30rem",
    padding:
      currentSection === "section3" ? "8px 16px" : "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }}
>
  {currentSection === "section3" ? (
    <span className="text-white font-medium p-5">Get Started</span>
  ) : currentSection === "section4" ? (
    <div className="p-8">
      <h3 className="text-xl font-bold mb-4">Premium Features</h3>
      <p className="text-gray-600">
        Enhanced visual effects optimized for light themes.
      </p>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center space-y-4">
      <h3 className="text-3xl font-bold">Default card</h3>
      <p className="text-lg">
        A sleek glass-style card with built-in animations. Use this as a base to
        create beautiful, modern UI elements.
      </p>
    </div>
  )}
</GlassCard>

      {/* Sections */}
      {[1, 2, 3, 4].map((n) => (
        <div
          key={n}
          id={`section${n}`}
          className={`h-screen text-slate-50 flex items-center ${
            n % 2 === 0 ? "justify-start" : "justify-end"
          }`}
        >
          <div className="w-full lg:w-2/3 text-left lg:pe-56 lg:px-28 p-4">
            {n === 1 && <h2>Section 1</h2>}
            {n === 2 && <h2>Default Component</h2>}
            {n === 3 && <h2>Interactive Button with Custom Styling</h2>}
            {n === 4 && <h2>Card with Shadow Mode for Light Backgrounds</h2>}
           

            {n === 1 && 
            <div className="w-full text-center mx-auto p-4 text-slate-50">
              <h1 className="text-[12rem] font-bold uppercase nowrap">Liquid Glass</h1>
            </div>
            }
            
            {n === 2 && <Snippets>
{`
import {GlassCard} from '@developer-hub/liquid-glass'

function App() {
return (
<GlassCard>
  <div className="p-6">
    <h2>Welcome to Liquid Glass</h2>
    <p>Experience the future of UI design with smooth, organic animations.</p>
  </div>
</GlassCard>
)
}
`}
            </Snippets>}
            {n === 3 && <Snippets>
{`
import {GlassCard} from '@developer-hub/liquid-glass'

<GlassCard
  displacementScale={100}
  blurAmount={0.01}
  cornerRadius={10}
  padding="8px 16px"
  onClick={() => console.log('Glass button clicked!')}
>
  <span className="text-white font-medium">Get Started</span>
</GlassCard>
`}
            </Snippets>}
            {n === 4 && <Snippets>
{`
import {GlassCard} from '@developer-hub/liquid-glass'

<GlassCard
  shadowMode={true}
  cornerRadius={16}
  className="max-w-md mx-auto"
>
  <div className="p-8">
    <h3 className="text-xl font-bold mb-4">Premium Features</h3>
    <p className="text-gray-600">Enhanced visual effects optimized for light themes.</p>
  </div>
</GlassCard>
`}
            </Snippets>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageFollow;
