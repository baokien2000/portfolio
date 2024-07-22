"use client";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const Clock = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let CurrentTime = setInterval(() => {
            setTime(Date.now());
        }, 1000);
        return () => clearInterval(CurrentTime);
    }, []);
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 1,
                },
            }}
            className=" gap-5  flex items-center justify-center "
        >
            <div className="p-5 aspect-square  w-auto h-[110px] flex items-center justify-center bg-white/5 rounded">
                {time === 0 ? "00" : dayjs(time).format("HH")}
            </div>
            <div>:</div>
            <div className="p-5 bg-white/5 aspect-square  w-auto h-[110px] flex items-center justify-center rounded">
                {time === 0 ? "00" : dayjs(time).format("mm")}
            </div>
            <div>:</div>
            <div className="p-5 aspect-square w-auto h-[110px] flex items-center justify-center bg-white/5 rounded  ">
                <p className="bg-main-gradient text-transparent bg-clip-text">{time === 0 ? "00" : dayjs(time).format("ss")}</p>
            </div>
            <div className="h-[110px] flex items-start justify-center ">
                <p className="text-[30px]">{time === 0 ? "AM" : dayjs(time).format("A")}</p>
            </div>
        </motion.div>
    );
};

export default Clock;
