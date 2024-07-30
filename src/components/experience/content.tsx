import { motion } from "framer-motion";
import React from "react";

const ExperienceContent = () => {
    const motionOptions = {
        viewport: { once: true },
        initial: { y: 10, opacity: 0 },
        whileInView: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <div className="flex flex-col gap-5 text-white/80 ">
            {/* EXPERIENCE - 2 ============================================== */}

            <div className="">
                <motion.h3 {...motionOptions} className="sm:text-lg font-bold text-white">
                    WORLD CONNECT INVESTMENT AND DEVELOPMENT TECHNOLOGY JSC
                </motion.h3>
                <motion.p className="text-sm " {...motionOptions}>
                    <i> Full Stack Developer/May 2023 - July 2024</i>
                </motion.p>
                <ul className={"list-disc list-inside mt-4 text-sm sm:text-base"}>
                    <motion.li {...motionOptions}>
                        Built comprehensive websites from scratch, handling both front-end and back-end development using technologies such as{" "}
                        <HighlightText text="NextJS" /> , <HighlightText text="TypeScript" />, <HighlightText text="Tailwind CSS" /> and{" "}
                        <HighlightText text="Firebase" />.
                    </motion.li>
                    <motion.li {...motionOptions}>
                        Developed and maintained web applications related to <HighlightText text="E-commerce" />,{" "}
                        <HighlightText text="Social Networks" />, <HighlightText text="AI-Generated content" />, and <HighlightText text="CMS" />
                    </motion.li>
                    <motion.li {...motionOptions}>Ensuring stable performance and timely feature updates.</motion.li>
                    <motion.li {...motionOptions}>
                        Optimized websites for <HighlightText text="fast loading times" /> , <HighlightText text="high performance" /> ,{" "}
                        <HighlightText text="mobile-friendliness" />, and <HighlightText text="SEO" /> compliance to enhance user experience and
                        search engine visibility.
                    </motion.li>
                    <motion.li {...motionOptions}>
                        Ensured the website design closely followed <HighlightText text="Figma" /> with high accuracy.
                    </motion.li>
                    <motion.li {...motionOptions}>
                        Utilized <HighlightText text="Zustand" /> for state management and <HighlightText text="React Query" /> for data handling and
                        API optimization.
                    </motion.li>
                    <motion.li {...motionOptions}>Collaborated with testers to ensure product quality.</motion.li>
                    <motion.li {...motionOptions}>Deployed the website to production, ensuring it was bug-free and of high quality.</motion.li>
                    <motion.li {...motionOptions}>Discussed and implemented additional features as requested by superiors</motion.li>
                </ul>
            </div>

            {/* EXPERIENCE - 1 ==============================================*/}
            <div className="">
                <motion.h3 {...motionOptions} className="sm:text-lg font-bold text-white">
                    MGI PROPERTY TECHNOLOGY CORPORATION
                </motion.h3>
                <motion.p className="text-sm " {...motionOptions}>
                    <i> Front End Developer/Mar 2023 - May 2023</i>
                </motion.p>
                <ul className={"list-disc list-inside mt-4 text-sm sm:text-base"}>
                    <motion.li {...motionOptions}>
                        Developing responsive website interfaces by using <HighlightText text="React" /> , <HighlightText text="TypeScript" />, and{" "}
                        <HighlightText text="Ant Design" />, following <HighlightText text="Figma designs" />.{" "}
                    </motion.li>
                    <motion.li {...motionOptions}>
                        Collaborating with back-end developers to integrate UI components with <HighlightText text="RESTful APIs" /> and databases.{" "}
                    </motion.li>
                    <motion.li {...motionOptions}> Identifying and fixing bugs to enhance user experience and website performance.</motion.li>
                    <motion.li {...motionOptions}>
                        {" "}
                        Using <HighlightText text="Git" /> for version control
                    </motion.li>
                </ul>
            </div>
        </div>
    );
};

export default ExperienceContent;

const HighlightText = ({ text }: { text: string }) => {
    return <span className="bg-main-gradient text-transparent bg-clip-text font-semibold">{text}</span>;
    // return <span className="text-white font-semibold"> {text}</span>;
};
