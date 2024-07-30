import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/libs/cn";
interface TabHeaderProps {
    tabs: {
        id: string;
        icon: React.ReactNode;
    }[];
    selectedTab: string;
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}
const TabHeader = ({ tabs, selectedTab, setSelectedTab }: TabHeaderProps) => {
    return (
        <ul className="flex gap-3 items-center">
            {tabs.map((item, i) => (
                <li
                    key={i}
                    className={cn(
                        "hover:bg-white/5 rounded size-5 flex items-center justify-center sm:size-8",
                        item.id === selectedTab ? "bg-white/5" : ""
                    )}
                    onClick={() => setSelectedTab(item.id)}
                >
                    {item.icon}
                </li>
            ))}
        </ul>
    );
};

export default TabHeader;
