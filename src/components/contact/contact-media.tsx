import React from "react";
import { ArrowDownGradient, FacebookIcon, GithubIcon, GmailIcon, LinkedinIcon } from "../../../public/assets/svg";
import { motion } from "framer-motion";
import Link from "next/link";
const contactList = [
    {
        icon: <GmailIcon className="size-7" />,
        title: "Gmail",
        className: "p-1 sm:hover:w-[110px]",
        href: "mailto:baokien.tang@gmail.com",
    },
    {
        icon: <GithubIcon className="size-8" />,
        title: "Github",
        className: "p-0.5  sm:hover:w-[120px]",
        href: "https://github.com/baokien2000",
    },
    {
        icon: <LinkedinIcon className="size-7" />,
        title: "Linkedin",
        className: "p-1  sm:hover:w-[130px]",
        href: "https://www.linkedin.com/in/kien-bao-057aa7267",
    },
    {
        icon: <FacebookIcon className="size-7" />,
        title: "Facebook",
        className: "p-1  sm:hover:w-[140px]",
        href: "https://www.facebook.com/baokien2000",
    },
    {
        icon: <ArrowDownGradient className="size-5 w-7 rotate-180" />,
        title: "Go to top",
        className: "sm:ml-0 ml-auto sm:mt-2 p-1 sm:hover:w-[140px]",
    },
];
const ContactMedia = () => {
    const handleScroll = () => {
        // scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div className="flex  sm:flex-col items-end gap-3 sm:gap-2 w-full ">
            {contactList.map((i) => (
                <motion.div
                    key={i.title}
                    viewport={{ once: true }}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                        },
                    }}
                    className={
                        "w-9 overflow-hidden transition-[width] size-9 flex items-center justify-end bg-transparent gradient-border cursor-pointer " +
                        i?.className
                    }
                >
                    {i.href ? (
                        <Link target="_blank" href={i.href} className="flex gap-3 items-center justify-center">
                            <p className="bg-main-gradient ml-3 text-transparent bg-clip-text font-bold whitespace-nowrap">{i.title}</p>
                            {i.icon}
                        </Link>
                    ) : (
                        <button onClick={handleScroll} className="flex gap-3  items-center justify-center">
                            <p className="bg-main-gradient  ml-3 text-transparent bg-clip-text font-bold whitespace-nowrap">{i.title}</p>
                            {i.icon}
                        </button>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default ContactMedia;
