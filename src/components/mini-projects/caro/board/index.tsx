import React, { useRef } from "react";
import { SquareType } from "../caro";
import Square from "./square";
import { motion,  } from "framer-motion";
interface BoardProps {
    squares: SquareType[];
    onClick: (i: number) => void;
    currentIndex: number;
    tableSize: number;
    winner: { winner: SquareType; line: number[] } | null;
}
export default function Board({ tableSize, currentIndex, onClick, squares, winner }: BoardProps) {
    // const winner = calculateWinner(squares, tableSize);
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1,
                delay: 1,
            }}
            viewport={{
                once: true,
                
            }}
            className={`grid grid-cols-${tableSize} gap-[1px]`}
            style={{
                gridTemplateColumns: `repeat(${tableSize}, 1fr)`,
            }}
        >
            {squares.map((_, i: number) => {
                return (
                    <Square
                    tableSize={tableSize}
                        key={i}
                        value={squares[i]}
                        onClick={() => onClick(i)}
                        disabled={winner || squares[i] ? true : false}
                        currentIndex={currentIndex}
                        index={i}
                        isWinnerMove={winner ? winner.line.includes(i) : false}
                    />
                );
            })}
        </motion.div>
    );
}
