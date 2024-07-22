"use client";
import { motion } from "framer-motion";
import React from "react";

import CertificateContent from "./certificate-content";

const Certificates = () => {
    return (
        <div className="flex sm:gap-5 gap-8 flex-col   h-fit w-full p-4 sm:py-10 sm:px-20">
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
                id="certificates"
                className="text-[32px] sm:text-[40px] sm:text-left text-center font-bold"
            >
                Certificates
            </motion.h2>
            <CertificateContent />
        </div>
    );
};

export default Certificates;