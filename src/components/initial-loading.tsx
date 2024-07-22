"use client";
import { motion } from "framer-motion";
import React from "react";
import logo from "../../public/assets/images/logo.jpeg";
import Image from "next/image";
const InitialLoading = () => {
    return (
        <motion.div
            viewport={{ once: true }}
            animate={{
                opacity: [1, 0.5, 0],
                display: ["flex", "flex", "none"],
            }}
            transition={{
                duration: 1.5,
                ease: "linear",
                times: [0, 0.5, 1],
            }}
            className="top-0 z-[1] left-0  flex gap-2 flex-col items-center justify-center fixed w-screen h-screen bg-black text-white"
        >
            <motion.div
                viewport={{ once: true }}
                animate={{
                    rotate: [0, 180, 360],
                    scale: [1, 0.5, 0],
                }}
                transition={{
                    duration: 1.5,
                    ease: "linear",
                    times: [0, 0.5, 1],
                }}
            >
                <Image className="animate-pulse" height={120} width={120} sizes="240px" src={logo} alt="Logo" />
            </motion.div>
        </motion.div>
    );
};

export default InitialLoading;
