import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const SkillCard = ({ title, imagePath }: { title: string; imagePath: string }) => {
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
            className="text-xs flex gap-2 flex-col items-center justify-center   h-[100px] w-[160px]  gradient-border"
        >
            <div className="relative h-[50px] w-[50px]">
                <Image sizes="200px" className="object-contain min-h-[50px] max-h-[50px] " fill src={imagePath} alt={title} />
            </div>
            <p>{title}</p>
        </motion.div>
    );
};
export default SkillCard;
