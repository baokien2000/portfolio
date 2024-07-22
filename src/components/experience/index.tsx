"use client";
import { motion } from "framer-motion";
import React from "react";
import ExperienceContainer from "./container";
const Experience = () => {
    // Biến đổi scrollYProgress từ 0 đến 1 thành giá trị từ 0 đến 684
    return (
        <div className="flex gap-8 sm:gap-5  flex-col min-h-[100svh] h-full w-full py-10 sm:px-20 ">
            <motion.h2
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
                className="text-[32px] sm:text-[40px] sm:text-left text-center font-bold"
            >
                Experience
            </motion.h2>
            <ExperienceContainer />
        </div>
    );
};

export default Experience;
