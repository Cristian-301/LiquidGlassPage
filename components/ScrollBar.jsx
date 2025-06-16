'use client'

import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";

function ScrollBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div
                className="fixed bottom-0 left-0 h-[0.15rem] lg:w-full z-40 bg-[#ba953e]"
                style={{ scaleX, originX: 0 }}
            />
            <div className="fixed bottom-0 left-0 h-[0.15rem] w-full bg-zinc-200 z-30"></div>
        </>
    );
}

export default ScrollBar;
