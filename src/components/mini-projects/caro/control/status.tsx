import React from "react";
import calculateWinner from "../board/calculateWinner";
import { SquareType } from "../caro";

interface CaroGameStatusProps {
    winnerList: SquareType[];
    turn: "X" | "O";
    handlePlayAgain: () => void;
    startGameNow: () => void;
    gameCountDown: number;
    player1Name: string;
    player2Name: string;
}
const CaroGameStatus = ({ winnerList, turn, handlePlayAgain, startGameNow, gameCountDown,player1Name,player2Name }: CaroGameStatusProps) => {
    const player1Win = winnerList.filter((i) => i === "X").length
    const player2Win = winnerList.filter((i) => i === "O").length
    // Game End -  X | O Win
    if (player1Win === 3 || player2Win === 3) {
        return (
            <div className="flex gap-2">
                <p>{player1Win > player2Win ?player1Name : player2Name} win -</p>
                <button onClick={handlePlayAgain} className="bg-main-gradient  text-transparent bg-clip-text font-medium">
                    Play again
                </button>
            </div>
        );
    }
    // Game is running
    if (gameCountDown === 0) return <div className="flex gap-2">Turn: {turn === "X" ?player1Name : player2Name}</div>;

    // End Round - wait for next round
    return (
        <div className="flex gap-2">
            <p>{`Round 2 start in ${gameCountDown}s - `}</p>
            <button onClick={startGameNow} className="bg-main-gradient  text-transparent bg-clip-text font-medium">
                Start Now
            </button>
        </div>
    );
};

export default CaroGameStatus;
