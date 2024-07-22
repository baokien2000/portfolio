"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
const skillList = [
    {
        title: "HTML5",
        imagePath: "/assets/images/skills/html.png",
    },
    {
        title: "CSS3",
        imagePath: "/assets/images/skills/css3.png",
    },
    {
        title: "JavaScript",
        imagePath: "/assets/images/skills/js.png",
    },
    {
        title: "ReactJS",
        imagePath: "/assets/images/skills/react.png",
    },
    {
        title: "NextJS",
        imagePath: "/assets/images/skills/nextjs.png",
    },
    {
        title: "NodeJS",
        imagePath: "/assets/images/skills/nodejs.png",
    },
    {
        title: "MongoDB",
        imagePath: "/assets/images/skills/mongodb.png",
    },
    {
        title: "ExpressJS",
        imagePath: "/assets/images/skills/express.png",
    },
    {
        title: "Git",
        imagePath: "/assets/images/skills/git.png",
    },
    {
        title: "TypeScript",
        imagePath: "/assets/images/skills/ts.png",
    },
    {
        title: "Tailwind CSS",
        imagePath: "/assets/images/skills/tailwindcss.svg",
    },
    {
        title: "Firebase",
        imagePath: "/assets/images/skills/firebase.svg",
    },
    {
        title: "Zustand",
        imagePath: "/assets/images/skills/zustand.png",
    },
    {
        title: "React Query",
        imagePath: "/assets/images/skills/react-query.svg",
    },
];
const Skills = () => {
    return (
        <div className="flex gap-5 flex-col   h-fit w-full p-4  sm:py-10 sm:px-20">
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
                id="skills"
                className="text-[32px] sm:text-[40px] sm:text-left text-center font-bold"
            >
                Skills
            </motion.h2>
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
                // animate="visible"
                className="flex flex-wrap gap-3  justify-center"
            >
                {skillList.map((i) => (
                    <SkillItem key={i.title} title={i.title} imagePath={i.imagePath} />
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;

const SkillItem = ({ title, imagePath }: { title: string; imagePath: string }) => {
    return (
        <motion.div
            viewport={{ once: true }}
            variants={{
                hidden: { y: 20, opacity: 0 },
                visible: {
                    y: 0,
                    opacity: 1,
                },
            }}
            className="text-xs flex gap-2  flex-col items-center justify-center   h-[100px] w-[160px]  gradient-border"
        >
            <div className="relative h-[50px] w-[50px]">
                <Image sizes="200px" className="object-contain min-h-[50px] max-h-[50px] " fill src={imagePath} alt={title} />
            </div>
            <p>{title}</p>
        </motion.div>
    );
};
