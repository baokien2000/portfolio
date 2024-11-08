import React, { useEffect, useRef, useState } from "react";
import calculateWinner from "../board/calculateWinner";
import { SquareType } from "../caro";

interface CaroGameStatusProps {
    winnerList: SquareType[];
    turn: "X" | "O";
    round: number;
    handlePlayAgain: () => void;
    startGameNow: () => void;
    player1Name: string;
    player2Name: string;
    mode: number;
}
const CaroGameStatus = ({ mode, winnerList, round, turn, handlePlayAgain, startGameNow, player1Name, player2Name }: CaroGameStatusProps) => {
    const [gameCountDown, setGameCountDown] = useState(0);
    const gameCountDownRef = useRef<NodeJS.Timeout | null>(null);
    const winRound = mode === 1 ? 1 : mode === 3 ? 2 : 3;
    const isGameOver = winnerList.filter((i) => i === "O").length >= winRound || winnerList.filter((i) => i === "X").length >= winRound;
    useEffect(() => {
        if (isGameOver) return;

        if (round === winnerList.length) {
            setGameCountDown(30);
            gameCountDownRef.current = setInterval(() => {
                setGameCountDown((prev) => {
                    if (prev - 1 === 0) startGameNow();
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            clearInterval(gameCountDownRef.current!);
            gameCountDownRef.current = null;
        };
    }, [winnerList, round]);

    const handleStartNow = () => {
        clearInterval(gameCountDownRef.current!);
        gameCountDownRef.current = null;
        setGameCountDown(0);
        startGameNow();
    };
    const player1Win = winnerList.filter((i) => i === "X").length;
    const player2Win = winnerList.filter((i) => i === "O").length;
    // Game End -  X | O Win
    if (player1Win === winRound || player2Win === winRound) {
        return (
            <div className="flex gap-2">
                <p>{player1Win === player2Win ? `Draw - ` : `${player1Win > player2Win ? player1Name : player2Name} win - `} </p>
                <button onClick={handlePlayAgain}>
                    <p className="bg-main-gradient font-bold  text-transparent bg-clip-text">Play again</p>
                </button>
            </div>
        );
    }
    // Game is running
    if (gameCountDown === 0) return <div className="flex gap-2">Turn: {turn === "X" ? player1Name : player2Name}</div>;

    // End Round - wait for next round
    return (
        <div className="flex gap-2">
            <p>
                Round 2 will start in <b className="inline-block min-w-[32px]">{gameCountDown}s</b> -
            </p>
            <button onClick={handleStartNow}>
                <p className="bg-main-gradient  text-transparent bg-clip-text font-bold">Start Now</p>
            </button>
        </div>
    );
};

export default CaroGameStatus;
