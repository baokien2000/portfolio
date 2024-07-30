"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowDown, ArrowDownGradient } from "../../../../public/assets/svg";
import Caro from "./caro";
import StartRoom from "./start-room";
import { ICaroData } from "./interface";
import { cn } from "@/libs/cn";

const CaroContainer = () => {
    const router = useRouter();
    const [isGameStart, setIsGameStart] = React.useState(false);
    const [initialData, setInitialData] = React.useState<ICaroData>({
        mode: 0,
        time: 0,
        size: 0,
        player: 0,
        startFirst: 0,
        level: 1,
        user1: {
            name: "Player 1",
            image: "question-mark-v3",
        },
        user2: {
            name: "Player 2",
            image: "question-mark-v3",
        },
    });
    const handleGameStart = (data: ICaroData) => {
        setInitialData(data);
        setIsGameStart(true);
    };
    return (
        <div className="relative flex flex-col min-h-[100svh] gap-5 sm:gap-3 w-full p-4 md:py-10 md:px-10 mediumLaptop:px-20">
            <div className=" max-w-screen-laptop mx-auto w-full ">
                <motion.h1
                    viewport={{ once: true }}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            duration: 1,
                        },
                    }}
                    id="caro-app"
                    className="text-[32px] sm:text-[40px text-left font-bold"
                >
                    Caro App
                </motion.h1>
                <div onClick={() => router.back()} className="flex w-fit gap-2 items-center group cursor-pointer">
                    <ArrowDown className="rotate-90 size-4 block group-hover:hidden" />
                    <ArrowDownGradient className="rotate-90 size-4 hidden group-hover:block" />
                    <p className="bg-white group-hover:bg-main-gradient text-transparent bg-clip-text font-semibold">Back</p>
                </div>
                {/* <button onClick={() => setIsGameStart((prev) => !prev)}>resart</button> */}
            </div>
            <AnimatePresence>{!isGameStart && <StartRoom initialData={initialData} onStart={handleGameStart} />}</AnimatePresence>
            <AnimatePresence>{isGameStart && <Caro setIsGameStart={setIsGameStart} initialData={initialData} />}</AnimatePresence>
        </div>
    );
};

export default CaroContainer;
