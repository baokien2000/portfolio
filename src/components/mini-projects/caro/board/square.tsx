import React from "react";
import { SquareType } from "../caro";

interface SquareProps {
    value: SquareType;
    onClick: () => void;
    current: number;
    index: number;
    isWinnerMove: boolean;
}
export default function Square({ value, onClick, current, index, isWinnerMove }: SquareProps) {
    let currentMoveColor = value === "X" ? (current === index ? `bg-red-600` : `bg-red-500`) : current === index ? `bg-blue-600` : `bg-blue-500`;
    currentMoveColor = isWinnerMove ? "bg-main-gradient" : currentMoveColor;
    return (
        <button
            className={
                " text-transparent bg-clip-text rounded border-[1.5px] border-[white]/50 float-left font-bold text-lg  bigPhone:text-2xl m-[0.5px] bigPhone:m-0 size-6 bigPhone:size-8 outline-none " +
                currentMoveColor
            }
            onClick={() => onClick()}
            // style={{ backgroundColor: currentMoveColor }}
        >
            {value}
        </button>
    );
}
