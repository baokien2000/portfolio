"use client";
import { motion } from "framer-motion";
import React from "react";
import { DocumentDownload } from "../../../public/assets/svg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    const motionOption = {
        viewport: { once: true },
        initial: { y: 20, opacity: 0 },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };
    return (
        <div id="about" className="flex gap-8 sm:gap-5 flex-col min-h-[100svh]  h-full w-full p-4 md:py-10 md:px-10 mediumLaptop:px-20">
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
                className="text-[32px] sm:text-[40px] sm:text-left text-center font-bold"
            >
                About
            </motion.h2>
            <div className="flex  flex-col sm:flex-row sm:items-start gap-10 sm:gap-5 md:gap-10 text-white/80">
                <motion.div
                    {...motionOption}
                    className="w-[210px] min-w-[210px] mx-auto md:w-[240px] md:min-w-[240px] h-auto aspect-[430/648] relative"
                >
                    <Image
                        src="/assets/images/profile.jpg"
                        loading="lazy"
                        fill
                        alt="Profile"
                        sizes="(max-width: 768px) 280px, 320px"
                        className="rounded md:min-w-[240px]"
                    />
                </motion.div>
                <div className=" flex gap-3 flex-col text-sm sm:text-base">
                    <motion.p {...motionOption} className="text-xl sm:text-2xl">
                        {`Hi, I'm `} <b className="bg-main-gradient text-transparent bg-clip-text">Tăng Bảo Kiên</b>
                    </motion.p>
                    <motion.p {...motionOption}>
                        {`I'm `}a passionate software developer based in{" "}
                        <span className="bg-main-gradient sm:font-semibold font-medium text-transparent bg-clip-text"> Ho Chi Minh City</span>. I
                        graduated from{" "}
                        <span className="bg-main-gradient sm:font-semibold font-medium text-transparent bg-clip-text">Ton Duc Thang University</span>{" "}
                        with a degree in{" "}
                        <span className="bg-main-gradient sm:font-semibold font-medium text-transparent bg-clip-text">Computer Science</span>.
                    </motion.p>
                    <motion.p {...motionOption}>
                        {`I've `}found my passion in web development. I love spending time coding and encountering new challenges. {`I'm `} highly
                        adaptable to new challenges and projects.
                    </motion.p>
                    <motion.p {...motionOption}>
                        With experience in backend development and strong skills in frontend development, I aim to grow as a{" "}
                        <span className="bg-main-gradient sm:font-semibold font-medium text-transparent bg-clip-text">
                            Senior Full-Stack Developer
                        </span>
                        . {`I'm `} excited to apply for a challenging position that leverages my skills and knowledge. {`I'm `} a quick learner and
                        can adapt to new technologies swiftly.
                    </motion.p>
                    <motion.p {...motionOption}>
                        Outside of work, I enjoy playing soccer, swimming, and gaming, which keep me active and inspired.
                    </motion.p>

                    <motion.div {...motionOption} className="mt-3">
                        <a
                            href={"/assets/TANG-BAO-KIEN-WEB-DEVERLOPER-CV.pdf"}
                            download={"TANG-BAO-KIEN-WEB-DEVERLOPER-CV.pdf"}
                            target="_blank"
                            className="flex gap-2 items-center px-3 h-10   group gradient-border rounded w-fit"
                            style={{ textDecoration: "none" }}
                        >
                            <p className="bg-main-gradient text-transparent bg-clip-text font-medium sm:font-bold">Download my CV</p>
                            <DocumentDownload className="size-5 group-hover:animate-bounce" />
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
