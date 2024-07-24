"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowDownGradient } from "../../../../public/assets/svg";
import Caro from "./caro";

const CaroContainer = () => {
    const router = useRouter();
    return (
        <div className="relative flex flex-col h-[100svh]  w-full p-4 md:py-10 md:px-10 mediumLaptop:px-20">
            <div className=" max-w-screen-laptop mx-auto w-full ">
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
                    Caro App
                </motion.h1>
                <div onClick={() => router.back()} className="flex w-fit gap-2 items-center group cursor-pointer">
                    <ArrowDown className="rotate-90 size-4 block group-hover:hidden" />
                    <ArrowDownGradient className="rotate-90 size-4 hidden group-hover:block" />
                    <p className="bg-white group-hover:bg-main-gradient text-transparent bg-clip-text font-semibold">Back</p>
                </div>
            </div>
            <Caro />
        </div>
    );
};

export default CaroContainer;
