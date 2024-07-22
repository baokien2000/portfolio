"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowDownGradient } from "../../../../public/assets/svg";
import Clock from "./clock";
const DigitalClockContainer = () => {
    const router = useRouter();
    return (
        <div className="flex gap-5 flex-col min-h-[100svh]  h-full w-full p-4 md:py-10 md:px-10 mediumLaptop:px-20">
            <div>
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
                    Digital Clock
                </motion.h1>
                <div onClick={() => router.back()} className="flex w-fit gap-2 items-center group cursor-pointer">
                    <ArrowDown className="rotate-90 size-4 block group-hover:hidden" />
                    <ArrowDownGradient className="rotate-90 size-4 hidden group-hover:block" />
                    <p className="bg-white group-hover:bg-main-gradient text-transparent bg-clip-text font-semibold">Back</p>
                </div>
            </div>
            <div className="absolute pointer-events-none leading-[1.2] font-bold text-2xl sm:text-[40px] md:text-[60px] top-0 left-0 w-screen h-screen flex items-center justify-center">
                <Clock />
            </div>
        </div>
    );
};

export default DigitalClockContainer;
