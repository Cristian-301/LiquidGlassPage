"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GlassCard } from "@developer-hub/liquid-glass";
import BgImage from "@/public/assets/herosection/sky.webp";

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
      <Image
        src="/assets/lingotti/Retro_kinegram.webp"
        width={500}
        height={500}
        alt="lingotto argor herause"
        className="hidden"
        style={{
          position: "fixed",
          top: "50%",
          left: imageLeft,
          transform: `translate(-50%, -50%) ${
            rotateImage ? "rotateY(180deg)" : ""
          }`,
          transition: "left 1s ease, transform 1s",
        }}
      />

      {/* GlassCard */}
      <GlassCard
        style={{
          position: "fixed",
          top: "50%",
          left: imageLeft,
          width: 400,
          transform: `translate(-50%, -50%) ${
            rotateImage ? "rotateY(180deg)" : ""
          }`,
          transition: "left 1s ease, transform 1s",
        }}
        className="hidden md:block"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/assets/lingotti/Retro_kinegram.webp"
            alt="Kinegram Lingotto"
            width={100}
            height={100}
            className="rounded-full border border-white/20 shadow-lg"
          />
          <h3 className="text-xl font-semibold text-white">Lingotto 100g</h3>
          <p className="text-sm text-white/80">
            Questo lingotto da 100g è protetto dalla tecnologia <b>Kinegram®</b>
            , garantendo autenticità e sicurezza assoluta.
          </p>
          <button className="mt-4 px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-medium transition">
            Scopri di più
          </button>
        </div>
      </GlassCard>

      {/* Fallback for small screens */}
      {width < 700 && (
        <div className="fade-lingotto">
          <Image
            src="/assets/lingotti/Retro_kinegram.webp"
            width={500}
            height={500}
            alt="lingotto argor herause"
          />
        </div>
      )}

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
            <h4
              className="lg:text-6xl text-slate-50 font-semibold"
              data-aos={width > 800 ? "fade-up" : "fade-in"}
              data-aos-duration="3000"
            >
              {n === 1 &&
                "Ogni lingotto è un mattone che costruisce il tuo futuro"}
              {n === 2 &&
                "Careisgold è impegnata nel fornire solo il meglio ai propri clienti"}
              {n === 3 && "I migliori lingotti d’oro puro certificati"}
              {n === 4 && "Filiera etica"}
              {n === 5 &&
                "La sicurezza è tuo diritto e una nostra responsabilità"}
            </h4>
            <div
              className="text-md lg:text-lg mt-4 mb-10 text-slate-50"
              data-aos="fade-in"
              data-aos-duration="3000"
            >
              {/* Content text for each section */}
              {n === 1 && (
                <p>
                  Careisgold offre solo lingotti che rispecchiano la massima
                  qualità disponibile sul mercato... <br />
                  <b>Lingotti di purezza 999,9‰ Good Delivery.</b>
                </p>
              )}
              {n === 2 && (
                <p>
                  Collaboriamo con partner d’eccellenza per la produzione dei
                  lingotti d’oro... <br />
                  Fiducia e sicurezza sono i capisaldi.
                </p>
              )}
              {n === 3 && (
                <p>
                  Careisgold ha scelto <b>Argor-Heraeus Italia SpA</b> come
                  partner...
                  <br />
                  Tracciabilità e liquidabilità garantite.
                </p>
              )}
              {n === 4 && (
                <p>
                  Oro estratto senza agenti chimici inquinanti, rispettando
                  ambiente e normative.
                </p>
              )}
              {n === 5 && (
                <p>
                  I lingotti fino a 100gr sono dotati di tecnologia{" "}
                  <b>Kinegram®</b> – sistema anti-contraffazione per la massima
                  sicurezza.
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageFollow;
