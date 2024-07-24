"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowDownGradient } from "../../../public/assets/svg";
import ProjectCard from "./project-card";
import { useRouter } from "next/navigation";
const MiniProjectsContainer = () => {
    const router = useRouter();
    return (
        <div id="about" className="flex gap-8 sm:gap-5 flex-col min-h-[100svh]  h-full w-full p-4 md:py-10 md:px-10 mediumLaptop:px-20">
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
                    Mini Projects
                </motion.h1>
                <div onClick={() => router.back()} className="flex w-fit gap-2 items-center group cursor-pointer">
                    <ArrowDown className="rotate-90 size-4 block group-hover:hidden" />
                    <ArrowDownGradient className="rotate-90 size-4 hidden group-hover:block" />
                    <p className="bg-white group-hover:bg-main-gradient text-transparent bg-clip-text font-semibold">Back</p>
                </div>
            </div>
            <motion.div
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 1 },
                    visible: {
                        opacity: 1,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2,
                        },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                // className="flex flex-wrap gap-3"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
            >
                {projectList.map((i) => (
                    <ProjectCard className={i.className} key={i.name + 100} name={i.name} imagePath={i.imagePath} href={i.href} />
                ))}
            </motion.div>
        </div>
    );
};

export default MiniProjectsContainer;

const projectList = [
    {
        name: "Weather App",
        href: "/mini-projects/weather-app",
        imagePath: "/assets/images/mini-projects/construction.png",
        className: "pointer-events-none cursor-not-allowed",
    },
    {
        name: "Caro App",
        href: "/mini-projects/caro-app",
        imagePath: "/assets/images/mini-projects/caro-app.png",
        className: "gradient-border ",
    },
    {
        name: "Todo App",
        href: "/mini-projects/todo-app",
        imagePath: "/assets/images/mini-projects/todo-app.png",
        className: "gradient-border ",
    },
    {
        name: "Digital Clock",
        href: "/mini-projects/digital-clock",
        imagePath: "/assets/images/mini-projects/digital-clock.png",
        className: "gradient-border ",
    },
    {
        name: "Liquid Effect",
        href: "/mini-projects/liquid",
        imagePath: "/assets/images/mini-projects/liquid.png",
        className: "gradient-border ",
    },
];
