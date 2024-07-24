import React from "react";
import { SquareType } from "../caro";
import { cn } from "@/libs/cn";
import { motion } from "framer-motion";
interface SquareProps {
    value: SquareType;
    onClick: () => void;
    current: number;
    index: number;
    isWinnerMove: boolean;
    disabled: boolean;
}
export default function Square({ value, onClick, current, index, isWinnerMove, disabled }: SquareProps) {
    return (
        <motion.button
            className={cn(
                "  leading-[1.2] rounded-sm border-[1.5px] border-[white]/50 font-bold  bigPhone:text-[22px] size-6 bigPhone:size-7 outline-none ",
                {
                    "text-red-500": value === "X",
                    "text-blue-500": value === "O",
                    "text-red-600": value === "X" && current === index,
                    "text-blue-600": value === "O" && current === index,

                    "bg-main-gradient !text-transparent bg-clip-text": isWinnerMove,
                }
            )}
            disabled={disabled}
            onClick={onClick}
            // style={{ backgroundColor: currentMoveColor }}
        >
            <span>{value}</span>
        </motion.button>
    );
}
