import React from "react";
import calculateWinner from "../board/calculateWinner";

interface CaroGameStatusProps {
    history: { squares: ("X" | "O" | null)[] }[];
    stepNumber: number;
}
const CaroGameStatus = ({ history, stepNumber }: CaroGameStatusProps) => {
    const current = history[stepNumber];
    // const Winner = calculateWinner(current.squares);
    return (
        <p className="mt-5 bigPhone:mt-0  mb-3  bg-transparent text-white w-2/3 pr-3 pt-0 inline-block text-xl pl-8  bigPhone:pl-10">
            {/* {Winner
                ? "Winner is: " + Winner.winner
                : current.squares.indexOf(null) <= -1
                ? "Draw"
                : "Next player: " + (stepNumber % 2 === 0 ? "X" : "O")} */}
        </p>
    );
};

export default CaroGameStatus;
