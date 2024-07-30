import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectContent = () => {
    return (
        <motion.div
            viewport={{ once: true }}
            variants={{
                hidden: { opacity: 1 },
                visible: {
                    opacity: 1,
                    transition: {
                        delayChildren: 0.3,
                        staggerChildren: 0.5,
                    },
                },
            }}
            initial="hidden"
            whileInView="visible"
            className="gap-5   grid grid-cols-1 sm:grid-cols-2 smallLaptop:grid-cols-3"
        >
            {projectList.map((project, index) => (
                <motion.div
                    viewport={{ once: true }}
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                        },
                    }}
                    className="w-full max-w-[400px] mx-auto md:max-w-[450px] group hover:shadow-sm hover:shadow-[#FAD961]  overflow-hidden h-auto aspect-[16/10] rounded relative
                "
                    key={index}
                >
                    <Image
                        src={project.imagePath}
                        alt={project.name}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                        className=" rounded group-hover:scale-110  duration-1000 transition-transform scale-100 "
                    />
                    <div className="absolute  gap-1 flex-col mediumLaptop:p-5 p-3 w-full h-full bg-black/80 group-hover:flex hidden">
                        <h3 className="font-bold mb-1 smallLaptop:mb-0 mediumLaptop:mb-1 text-lg bg-main-gradient text-transparent bg-clip-text">
                            {project.name}
                        </h3>
                        <p className=" text-white/90 text-base md:text-[15px] mediumLaptop:text-base">{project.description}</p>
                        <div className="flex flex-row md:flex-col gap-5 md:gap-1">
                            <Link
                                className="py-1 smallLaptop:py-0 mediumLaptop:py-1 relative  w-fit  before:duration-500 before:content-[''] before:absolute before:-translate-x-1/2 before:bottom-0 before:w-0 hover:before:w-full before:mx-auto before:transition-[width] before:left-1/2 before:h-[1px] before:bg-main-gradient   "
                                href={project.live}
                                target={project?.target}
                            >
                                Live app
                            </Link>
                            {project?.github && (
                                <Link
                                    className="py-1 smallLaptop:py-0 mediumLaptop:py-1 relative  w-fit before:duration-500  before:content-[''] before:absolute before:-translate-x-1/2 before:bottom-0 before:w-0 hover:before:w-full before:mx-auto before:transition-[width] before:left-1/2 before:h-[1px] before:bg-main-gradient   "
                                    href={project.github}
                                    target="_blank"
                                >
                                    Github
                                </Link>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default ProjectContent;

const projectList = [
    {
        imagePath: "/assets/images/projects/kmovie_project.png",
        name: "Kmovie",
        description: "High-performance movie website built with Nextjs, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB.",
        github: "https://github.com/baokien2000/kmovie",
        live: "https://kmovie-one.vercel.app/",
        target: "_blank",
    },
    {
        imagePath: "/assets/images/projects/kstore_project.png",
        name: "Kstore",
        description: "  E-commerce and CMS website built with Reactjs, MongoDB, Material UI, Antd, Redux , Node.js, Express.js, MongoDB.",
        github: "https://github.com/baokien2000/shoe-store",
        live: "https://kstore2000.netlify.app/",
        target: "_blank",
    },
    {
        imagePath: "/assets/images/projects/portfolio_v1_project.png",
        name: "Portfolio v1",
        description: "My first portfolio website built with Reactjs, Bootstrap.",
        github: "https://github.com/baokien2000/BKApp",
        live: "https://bk2000.netlify.app/",
        target: "_blank",
    },
    {
        imagePath: "/assets/images/projects/mini_project_v1.png",
        name: "Mini Project",
        description: "A few small projects I did while I was learning to code, built with Reactjs, CSS.",
        live: "/mini-projects",
    },
];