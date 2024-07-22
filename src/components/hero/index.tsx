"use client";
import { motion } from "framer-motion";
import React from "react";
import { ArrowDownGradient } from "../../../public/assets/svg";
const Hero = () => {
    const handleScroll = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className=" h-[100svh] w-full flex items-center justify-center ">
            <motion.div
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 flex-col h-fit w-fit"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{
                    scale: 1,
                    opacity: 1,
                    transition: {
                        duration: 1,
                    },
                }}
            >
                <h1 className="text-[30px] sm:text-[40px]">
                    {`Hello, I'm `} <b className="bg-main-gradient text-transparent bg-clip-text">Kiên</b>.
                </h1>

                <p className="text-xl sm:text-2xl text-center">{`I'm a full stack web developer.`}</p>
                <button onClick={handleScroll} className="mt-2 button group gradient-border  px-3 h-10 outline-none flex gap-2 items-center">
                    <p className="bg-main-gradient text-transparent bg-clip-text font-bold">View my work</p>
                    <ArrowDownGradient className="size-4 group-hover:animate-bounce" />
                </button>
            </motion.div>
        </div>
    );
};

export default Hero;
