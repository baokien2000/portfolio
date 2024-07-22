"use client";
import React, { useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowDownGradient } from "../../../../public/assets/svg";
import "./liquid.css";
import { useDeviceSize } from "@/hooks/useDeviceSize";
const LiquidContainer = () => {
    const router = useRouter();
    const [width, height] = useDeviceSize();
    return (
        <div className="flex gap-5 flex-col min-h-[100svh]   h-full w-full p-4 md:py-10 md:px-10 mediumLaptop:px-20">
            <div className=" max-w-screen-laptop mx-auto w-full">
                <motion.h1
                    viewport={{ once: true }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                        },
                    }}
                    id="experience"
                    className="text-[32px] sm:text-[40px text-left font-bold"
                >
                    Liquid Effect
                </motion.h1>
                <div onClick={() => router.back()} className="flex w-fit gap-2 items-center group cursor-pointer">
                    <ArrowDown className="rotate-90 size-4 block group-hover:hidden" />
                    <ArrowDownGradient className="rotate-90 size-4 hidden group-hover:block" />
                    <p className="bg-white group-hover:bg-main-gradient text-transparent bg-clip-text font-semibold">Back</p>
                </div>
            </div>
            <motion.div
                drag
                initial={{ opacity: 0 }}
                whileInView={{ x: width / 2 - 180, y: height / 2 - 120, opacity: 1 }}
                dragConstraints={{ left: 0, right: width - 320, top: 0, bottom: height / 2 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    opacity: { duration: 0.5, delay: 0.5 },
                }}
                className="ColorfulGlowingLiquid absolute w-fit h-fit cursor-pointer"
            >
                <div className="Circle">
                    <div className="Liqiud" />
                </div>
                <div className="Shadow" />
            </motion.div>
        </div>
    );
};

export default LiquidContainer;
