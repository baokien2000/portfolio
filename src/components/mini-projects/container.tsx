"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowDownGradient } from "../../../public/assets/svg";
import ProjectCard from "./project-card";
import { useRouter } from "next/navigation";
const MiniProjectsContainer = () => {
    const router = useRouter();
    return (
        <div className="flex gap-5 flex-col min-h-[100svh]  h-full w-full py-10 px-20">
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
                    hidden: { opacity: 1, scale: 0 },
                    visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            delayChildren: 0.3,
                            staggerChildren: 0.2,
                        },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                // animate="visible"
                className="flex flex-wrap gap-3"
            >
                {projectList.map((i) => (
                    <ProjectCard key={i.name} name={i.name} imagePath={i.imagePath} href={i.href} />
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
        imagePath: "/assets/images/projects/mini_project.png",
        // imagePath: "/assets/images/mini-projects/weather-app.png",
    },
    {
        name: "Weather App",
        href: "/mini-projects/weather-app",
        imagePath: "/assets/images/projects/mini_project.png",
        // imagePath: "/assets/images/mini-projects/weather-app.png",
    },
    {
        name: "Weather App",
        href: "/mini-projects/weather-app",
        imagePath: "/assets/images/projects/mini_project.png",
        // imagePath: "/assets/images/mini-projects/weather-app.png",
    },
    {
        name: "Digital Clock",
        href: "/mini-projects/digital-clock",
        imagePath: "/assets/images/mini-projects/digital-clock.png",
    },
    {
        name: "Liquid Effect",
        href: "/mini-projects/liquid",
        imagePath: "/assets/images/mini-projects/liquid.png",
    },
];
