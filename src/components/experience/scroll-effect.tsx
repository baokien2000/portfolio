// "use client";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import ExperienceContent from "./content";

// const ScrollEffect = () => {
//     const [height, setHeight] = React.useState(0);
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["200px end", "end end"],
//     });
//     const progress = useSpring(scrollYProgress);
//     useEffect(() => {
//         const clientHeight = document?.getElementById("experience-container")?.clientHeight;
//         if (clientHeight) {
//             setHeight(clientHeight);
//         }
//     }, []);
//     // Biến đổi scrollYProgress từ 0 đến 1 thành giá trị từ 0 đến 684
//     const y1Value = useTransform(progress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 884 / 5, (884 / 5) * 2, (884 / 5) * 3, (884 / 5) * 4, 884]);

//     return (
//         <div id="experience-container" className="flex gap-10 relative" ref={ref}>
//             <div className="">
//                 <div className=" border-netural-200 ml-[27px] flex size-4 items-center justify-center rounded-full border shadow-sm">
//                     <div className="size-2 rounded-full  border border-neutral-300 bg-white"></div>
//                 </div>
//                 <svg viewBox="0 0 20 884" width="20" height={height ?? 664} className=" ml-4 block" aria-hidden="true">
//                     <path d="M 1 0V -36 l 18 24 V 707.2 l -18 24V 884" fill="none" stroke="#9091A0" strokeOpacity="0.16"></path>
//                     <path
//                         d="M 1 0V -36 l 18 24 V 707.2 l -18 24V 884"
//                         fill="none"
//                         stroke="url(#gradient)"
//                         strokeWidth="1.25"
//                         className="motion-reduce:hidden"
//                     ></path>
//                     <defs>
//                         <motion.linearGradient
//                             // initial={{ y1: 0 }}
//                             // animate={{ y2: y2Value.get() }}
//                             id="gradient"
//                             gradientUnits="userSpaceOnUse"
//                             x1="0"
//                             x2="0"
//                             y1={y1Value}
//                             y2="0"
//                         >
//                             <stop stopColor="#18CCFC" stopOpacity="0"></stop>
//                             <stop stopColor="#18CCFC"></stop>
//                             <stop offset="0.325" stopColor="#6344F5"></stop>
//                             <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
//                         </motion.linearGradient>
//                     </defs>
//                 </svg>
//             </div>
//             <ExperienceContent />
//         </div>
//     );
// };

// export default ScrollEffect;

"use client";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ExperienceContent from "./content";

const ScrollEffect = ({ y1Value, height }: { y1Value: MotionValue<number>; height: number }) => {
    return (
        <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 1,
                },
            }}
            className=""
        >
            <div className=" border-netural-200  ml-auto -mr-[7px] sm:-mr-1 flex size-4 items-center justify-center rounded-full border shadow-sm">
                <div className="size-2 rounded-full  border border-neutral-300 bg-white"></div>
            </div>
            <svg viewBox="0 0 20 884" width="20" height={height ?? 664} className="sm:ml-4 block" aria-hidden="true">
                <path d="M 1 0V -36 l 18 24 V 707.2 l -18 24V 884" fill="none" stroke="#9091A0" strokeOpacity="0.16"></path>
                <path
                    d="M 1 0V -36 l 18 24 V 707.2 l -18 24V 884"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="1.25"
                    className="motion-reduce:hidden"
                ></path>
                <defs>
                    <motion.linearGradient
                        // initial={{ y1: 0 }}
                        // animate={{ y2: y2Value.get() }}
                        id="gradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        x2="0"
                        y1={y1Value}
                        y2="0"
                    >
                        {/* <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                        <stop stopColor="#18CCFC"></stop>
                        <stop offset="0.325" stopColor="#6344F5"></stop>
                        <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop> */}
                        <stop stopColor="#FAD961" stopOpacity="0"></stop>
                        <stop stopColor="#FAD961"></stop>
                        <stop offset="0.325" stopColor="#F76B1C"></stop>
                        <stop offset="1" stopColor="#F76B1C" stopOpacity="0"></stop>
                    </motion.linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
};

export default ScrollEffect;
