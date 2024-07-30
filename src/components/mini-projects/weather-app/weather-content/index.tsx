import React, { useState } from "react";
import { WeatherData } from "../interface";
import { temperatureKtoC } from "@/utils/format";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import TabHeader from "./tab-header";
import TabContent from "./tab-content";
import { CloudIcon, HuminityIcon, PressureIcon, ThermometerIcon, TimeIcon, WindIcon } from "../../../../../public/assets/svg/weather";

const tabs = [
    {
        icon: <CloudIcon className="text-white size-5 sm:size-8 cursor-pointer" />,
        id: "cloud",
    },
    {
        icon: <ThermometerIcon className="text-white size-5 sm:size-8 cursor-pointer" />,
        id: "temperature",
    },
    {
        icon: <HuminityIcon className="text-white size-5 sm:size-8 cursor-pointer" />,
        id: "humidity",
    },
    {
        icon: <WindIcon className="text-white size-5 sm:size-8 cursor-pointer" />,
        id: "wind",
    },

    {
        icon: <PressureIcon className="text-white size-5 sm:size-8 cursor-pointer" />,
        id: "pressure",
    },
    {
        icon: <TimeIcon className="text-white size-4 sm:size-7 cursor-pointer" />,
        id: "time",
    },
];

const WeatherContent = ({ data, cityName }: { data: WeatherData | null; cityName: string }) => {
    const [selectedTab, setSelectedTab] = useState("temperature");
    console.log("=====data", data);
    if (!data || data.cod === "400" || data.cod === "404")
        return (
            <div className="flex justify-between flex-col items-center gap-3 py-10">
                <p className="text-2xl">Not Found City</p>
                <b>{cityName}</b>
            </div>
        );
    return (
        <div className="flex flex-1 flex-col justify-start  h-full ">
            <div className="pt-10 flex items-center flex-col gap-1 mb-10">
                <p className="text-3xl font-bold">{temperatureKtoC(data.main.temp)}&deg;C</p>
                <p className="text-lg">{data.name}</p>
            </div>
            <div className="flex text-lg mb-2 mt-auto gap-3 justify-between">
                <p>MonDay</p>
                <TabHeader selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabs={tabs} />
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedTab}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <TabContent data={data} selectedTab={selectedTab} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default WeatherContent;
