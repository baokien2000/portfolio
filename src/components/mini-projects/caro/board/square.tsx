import React from "react";
import { SquareType } from "../caro";

interface SquareProps {
    value: SquareType;
    onClick: () => void;
    current: number;
    index: number;
    isWinnerMove: boolean;
    disabled: boolean;
}
export default function Square({ value, onClick, current, index, isWinnerMove, disabled }: SquareProps) {
    let currentMoveColor = value === "X" ? (current === index ? `bg-red-600` : `bg-red-500`) : current === index ? `bg-blue-600` : `bg-blue-500`;
    currentMoveColor = isWinnerMove ? "bg-main-gradient" : currentMoveColor;
    return (
        <button
            className={
                " text-transparent bg-clip-text rounded leading-[1.2] border-[1.5px] border-[white]/50 font-bold  bigPhone:text-[22px] size-6 bigPhone:size-7 outline-none " +
                currentMoveColor
            }
            disabled={disabled}
            onClick={onClick}
            // style={{ backgroundColor: currentMoveColor }}
        >
            {value}
        </button>
    );
}
