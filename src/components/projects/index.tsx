"use client";
import { motion } from "framer-motion";
import React from "react";
import ProjectContent from "./project-content";

const Projects = () => {
    return (
        <div className="flex sm:gap-5  gap-8 flex-col min-h-[100svh]  h-full w-full py-10 p-4 sm:px-20">
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
                id="projects"
                className="text-[32px] sm:text-[40px] sm:text-left text-center font-bold"
            >
                Projects
            </motion.h2>
            <ProjectContent />
        </div>
    );
};

export default Projects;
