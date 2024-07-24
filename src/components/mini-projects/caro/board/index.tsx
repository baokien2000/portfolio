import React from "react";
import { SquareType } from "../caro";
import calculateWinner from "./calculateWinner";
import Square from "./square";

interface BoardProps {
    squares: SquareType[];
    onClick: (i: number) => void;
    current: number;
    tableSize: number;
}
export default function Board({ tableSize, current, onClick, squares }: BoardProps) {
    const winner = calculateWinner(squares, tableSize);
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
                        disabled={winner || squares[i] ? true : false}
                        current={current}
                        index={i}
                        isWinnerMove={winner ? winner.line.includes(i) : false}
                    />
                );
            })}
        </div>
    );
}
