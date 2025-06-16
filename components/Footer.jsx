"use client"

import Link from "next/link";
import { useRef, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa';

export default function Footer() {
  const lineRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const lineElement = lineRef.current;
    const elements = document.querySelectorAll('.animation-footer-text');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lineElement.classList.add('animated-line');
          elements.forEach(element => {
            element.classList.remove('opacity-0');
            element.classList.add('opacity-1');
          });
        } else {
          lineElement.classList.remove('animated-line');
          elements.forEach(element => {
            element.classList.remove('opacity-1');
            element.classList.add('opacity-0');
          });
        }
      });
    }, options);

    observer.observe(lineElement);

    return () => {
      if (lineElement) observer.unobserve(lineElement);
    };
  }, []);

  return (
    <footer className="relative lg:w-full bg-white text-black lg:py-10 py-5 px-5">
      <p className="text-black text-xl font-bold lg:absolute relative mb-4 lg:mb-0">LOGO</p>
      <div className="w-full flex justify-start lg:justify-center items-center z-20">
        <div className="text-start lg:w-1/2">
          <p className="lg:text-2xl text-lg font-semibold uppercase mb-2">Example Company S.p.A.</p>
          <p className="text-sm lg:text-lg">1234 Via Roma, Milano (MI), Italia</p>
          <p className="text-sm lg:text-lg">P.IVA 12345678901 - REA MI-1234567</p>
          <p className="text-sm lg:text-lg">Cap. Sociale € 1.000.000 i.v.</p>
          <p className="text-sm lg:text-lg">info@example.com</p>

          <hr ref={lineRef} className="border-b border-[#2c5666] my-4" />

          <div className="flex flex-wrap justify-start lg:space-x-8 text-black">
            <Link href="https://facebook.com" target="_blank" className="text-sm me-3 mt-3 lg:m-0 hover:text-gray-400 opacity-0 animation-footer-text" style={{ transition: "opacity 1.5s ease-in" }}><FaFacebook /></Link>
            <Link href="https://instagram.com" target="_blank" className="text-sm me-3 mt-3 lg:m-0 hover:text-gray-400 opacity-0 animation-footer-text" style={{ transition: "opacity 2s ease-in" }}><FaInstagram /></Link>
            <Link href="https://linkedin.com" target="_blank" className="text-sm me-3 mt-3 lg:m-0 hover:text-gray-400 opacity-0 animation-footer-text" style={{ transition: "opacity 2.5s ease-in" }}><FaLinkedin /></Link>
            <Link href="https://pinterest.com" target="_blank" className="text-sm me-3 mt-3 lg:m-0 hover:text-gray-400 opacity-0 animation-footer-text" style={{ transition: "opacity 3s ease-in" }}><FaPinterest /></Link>
            <Link href="/privacy-policy" className="text-sm me-3 mt-3 lg:m-0 hover:text-gray-400 opacity-0 animation-footer-text" style={{ transition: "opacity 3.5s ease-in" }}>Privacy Policy</Link>
            <Link href='/terms-of-service' className="text-sm me-3 mt-3 lg:m-0 hover:text-gray-400 opacity-0 animation-footer-text" style={{ transition: "opacity 4s ease-in" }}>Termini di Servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
