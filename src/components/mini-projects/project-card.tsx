import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const ProjectCard = ({ href, imagePath, name, className }: { href: string; imagePath: string; name: string; className?: string }) => {
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
            className={"text-xs flex gap-2  flex-col items-center justify-center   h-auto w-full aspect-[16/9]  " + className}
        >
            <Link href={href} className="relative h-full w-[calc(100%-4px)]  rounded-sm m-0.5   ">
                <Image
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 600px"
                    className="object-cover rounded-sm "
                    fill
                    src={imagePath}
                    alt={name}
                />
            </Link>
        </motion.div>
    );
};

export default ProjectCard;
