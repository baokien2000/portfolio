import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface selectCertificateProps {
    name: string;
    imagePath: string;
    className: string;
}
const CertificateContent = () => {
    const [selectCertificate, setSelectCertificate] = useState<selectCertificateProps | null>(null);
    const refOutsideClick = useOutsideClick(() => {
        setSelectCertificate(null);
    }, true);
    useEffect(() => {
        if (selectCertificate) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectCertificate]);
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
            className=" sm:gap-5 gap-3  grid grid-cols-3"
        >
            {projectList.map((project, index) => (
                <motion.div
                    layoutId={project.name}
                    onClick={() => setSelectCertificate(project)}
                    viewport={{ once: true }}
                    variants={{
                        hidden: { y: 20, opacity: 0 },
                        visible: {
                            y: 0,
                            opacity: 1,
                        },
                    }}
                    className={"w-full  hover:shadow-sm hover:shadow-[#FAD961] overflow-hidden h-auto aspect-[16/10] rounded relative group"}
                    key={index}
                >
                    <Image
                        src={project.imagePath}
                        alt={project.name}
                        fill
                        sizes="33vw"
                        className=" rounded group-hover:scale-110 opacity-90 duration-1000 transition-transform scale-100 "
                    />
                    <div className="absolute hidden sm:flex text-sm cursor-pointer gap-1 flex-col items-end justify-end p-5 w-full h-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-1000   ">
                        <h3 className="font-bold mb-1  bg-main-gradient text-transparent bg-clip-text">{project.name}</h3>
                    </div>
                </motion.div>
            ))}
            {selectCertificate && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className=" fixed z-20  left-0 bg-black/80 top-0 w-screen h-screen"
                />
            )}
            <AnimatePresence>
                {selectCertificate && (
                    <div className="w-full h-full z-20  flex items-center justify-center fixed left-0 top-0">
                        {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className=" absolute left-0 top-0 w-screen h-screen"
                    /> */}
                        <motion.div
                            layoutId={selectCertificate.name}
                            ref={refOutsideClick}
                            className="relative w-[90svw] h-auto  sm:h-[80svh] sm:w-auto aspect-[16/10] rounded  "
                        >
                            <Image src={selectCertificate.imagePath} alt={selectCertificate.name} sizes="50vw" fill className=" rounded " />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CertificateContent;

const projectList = [
    {
        imagePath: "/assets/images/certificates/Certifi_Agile.png",
        name: "AGILE DEVELOPMENT & SCRUM FRAMEWORK",
        className: "text-white",
    },
    {
        imagePath: "/assets/images/certificates/Certifi_ReactJSBasic.png",
        name: "REACT (BASIC)",
        className: "text-black",
    },
    {
        imagePath: "/assets/images/certificates/Certifi_Toiec.png",
        name: "TOEIC 650",
        className: "text-black",
    },
];
