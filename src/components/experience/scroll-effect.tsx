"use client";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const ScrollEffect = ({ y1Value, height }: { y1Value: MotionValue<number>; height: number }) => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 1,
                },
            }}
            className=""
        >
            <div className=" border-netural-200  ml-auto -mr-[7px] sm:-mr-1 flex size-4 items-center justify-center rounded-full border shadow-sm">
                <div className="size-2 rounded-full  border border-neutral-300 bg-white"></div>
            </div>
            <svg viewBox="0 0 20 884" width="20" height={height ?? 664} className="sm:ml-4 block" aria-hidden="true">
                <path d="M 1 0V -36 l 18 24 V 707.2 l -18 24V 884" fill="none" stroke="#9091A0" strokeOpacity="0.16"></path>
                <path
                    d="M 1 0V -36 l 18 24 V 707.2 l -18 24V 884"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1.25"
                    className="motion-reduce:hidden"
                ></path>
                <defs>
                    <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1Value} y2="0">
                        <stop stopColor="#FAD961" stopOpacity="0"></stop>
                        <stop stopColor="#FAD961"></stop>
                        <stop offset="0.325" stopColor="#F76B1C"></stop>
                        <stop offset="1" stopColor="#F76B1C" stopOpacity="0"></stop>
                    </motion.linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};

export default ScrollEffect;
