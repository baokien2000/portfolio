import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ href, imagePath, name }: { href: string; imagePath: string; name: string }) => {
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
            className="text-xs flex gap-2  flex-col items-center justify-center   h-[100px] w-auto aspect-[16/9]  gradient-border"
        >
            <Link href={href} className="relative h-full w-[calc(100%-4px)]  rounded-sm m-0.5   ">
                <Image sizes="200px" className="object-cover rounded-sm " fill src={imagePath} alt={name} />
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
