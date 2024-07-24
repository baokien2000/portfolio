import React from "react";
import { SquareType } from "../caro";
import calculateWinner from "./calculateWinner";
import Square from "./square";

interface BoardProps {
    squares: SquareType[];
    onClick: (i: number) => void;
    current: number;
    tableSize: number;
    setWinner: React.Dispatch<React.SetStateAction<SquareType[]>>;
}
export default function Board({ tableSize, current, onClick, squares, setWinner }: BoardProps) {
    const winner = calculateWinner(squares);
    return (
        <div
            className={`grid grid-cols-${tableSize} gap-0.5`}
            style={{
                gridTemplateColumns: `repeat(${tableSize}, 1fr)`,
            }}
        >
            {squares.map((_, i: number) => {
                return (
                    <Square
                        key={i}
                        value={squares[i]}
                        onClick={() => onClick(i)}
                        current={current}
                        index={i}
                        isWinnerMove={winner ? winner.line.includes(i) : false}
                    />
                );
            })}
        </div>
    );
}
