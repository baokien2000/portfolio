"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";
import ExperienceContent from "./content";
import ScrollEffect from "./scroll-effect";
import { useDeviceSize } from "@/hooks/useDeviceSize";

const ExperienceContainer = () => {
    const [height, setHeight] = React.useState(0);
    const [width] = useDeviceSize();
    console.log("ExperienceContainer width", width);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["200px end", "end end"],
    });
    const progress = useSpring(scrollYProgress);
    useEffect(() => {
        const clientHeight = document?.getElementById("experience-container")?.clientHeight;
        if (clientHeight) {
            console.log("im in");
            setHeight(clientHeight);
        }
    }, [width]);

    // Biến đổi scrollYProgress từ 0 đến 1 thành giá trị từ 0 đến 684
    const y1Value = useTransform(progress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 884 / 5, (884 / 5) * 2, (884 / 5) * 3, (884 / 5) * 4, 884]);

    return (
        <div id="experience-container" className="flex gap-5 sm:gap-10 pr-4 sm:pr-0 items-start relative" ref={ref}>
            <ScrollEffect y1Value={y1Value} height={height} />
            <ExperienceContent />
        </div>
    );
};

export default ExperienceContainer;
