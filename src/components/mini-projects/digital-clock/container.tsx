"use client";
import React, { useState } from "react";
import { motion, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowDownGradient } from "../../../../public/assets/svg";
import { useDeviceSize } from "@/hooks/useDeviceSize";
import Clock from "./clock";
const DigitalClockContainer = () => {
    const router = useRouter();
    const [width, height] = useDeviceSize();
    console.log("{ x: width / 2, y: height/2 }", { x: width / 2, y: height / 2 });
    return (
        <div className="flex gap-5 flex-col min-h-[100svh] bg-white/[4%]  h-full w-full py-10 px-20">
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
                    className="text-[40px] font-bold"
                >
                    Digital Clock
                </motion.h1>
                <div onClick={() => router.back()} className="flex w-fit gap-2 items-center group cursor-pointer">
                    <ArrowDown className="rotate-90 size-4 block group-hover:hidden" />
                    <ArrowDownGradient className="rotate-90 size-4 hidden group-hover:block" />
                    <p className="bg-white group-hover:bg-main-gradient text-transparent bg-clip-text font-semibold">Back</p>
                </div>
            </div>
            <div className="absolute pointer-events-none leading-[1.2] font-bold text-[60px] top-0 left-0 w-screen h-screen flex items-center justify-center">
                <Clock />
            </div>
        </div>
    );
};

export default DigitalClockContainer;
