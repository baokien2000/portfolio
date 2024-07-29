import React from "react";
import { SquareType } from "../caro";
import { cn } from "@/libs/cn";
import { motion } from "framer-motion";
interface SquareProps {
    value: SquareType;
    onClick: () => void;
    currentIndex: number;
    index: number;
    isWinnerMove: boolean;
    disabled: boolean;
    tableSize: number;
}
export default function Square({ value, tableSize, onClick, currentIndex, index, isWinnerMove, disabled }: SquareProps) {
    return (
        <motion.button
            className={cn("  leading-[1.2] justify-center items-center flex rounded-sm border-[1.5px] border-[white]/50 font-bold outline-none ", {
                "text-red-500": value === "X",
                "text-blue-500": value === "O",
                "text-red-600": value === "X" && currentIndex === index,
                "text-blue-600": value === "O" && currentIndex === index,

                "text-xs size-4  phone:text-sm phone:size-5 bigPhone:text-lg bigPhone:size-6 tablet:text-[22px] tablet:size-7": tableSize === 16,
                "text-sm size-5  phone:text-base phone:size-6 bigPhone:size-7 bigPhone:text-[22px]": tableSize === 12,
                "text-base size-6  phone:text-[22px] phone:size-7 ": tableSize === 10,
            })}
            disabled={disabled}
            onClick={onClick}
            // style={{ backgroundColor: currentIndexMoveColor }}
        >
            <span className={cn({ "bg-main-gradient !text-transparent bg-clip-text": isWinnerMove })}>{value}</span>
        </motion.button>
    );
}
