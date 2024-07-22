"use client";
import { motion } from "framer-motion";
import React from "react";
import ContactContent from "./contact-content";
import ContactMedia from "./contact-media";

const Contact = () => {
    return (
        <div className="flex sm:gap-5 gap-8 flex-col   h-fit w-full p-4 md:py-10 md:px-10 mediumLaptop:px-20">
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
                id="contact"
                className="text-[32px] sm:text-[40px] sm:text-left text-center font-bold"
            >
                Contact
            </motion.h2>
            <div className="flex flex-col sm:flex-row gap-10 justify-between w-full items-start">
                <ContactContent />
                <ContactMedia />
            </div>
        </div>
    );
};

export default Contact;
