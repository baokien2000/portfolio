import React, { useEffect, useRef, useState } from "react";
import calculateWinner from "./board/calculateWinner";
import Board from "./board";
import UserBox from "./user/user-box";
import CaroGameStatus from "./control/status";
import { ICaroData } from "./interface";
import { motion } from "framer-motion";
import { cn } from "@/libs/cn";
import { Orbitron } from "next/font/google";
import { minimax } from "./AI";
export type SquareType = "X" | "O" | null;
export type HistoryType = { squares: SquareType[] }[];
const orbitron = Orbitron({ subsets: ["latin"] });

const Caro = ({ initialData, setIsGameStart }: { initialData: ICaroData; setIsGameStart: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const tableSize = initialData.size ?? 16;
    const initialSquares: SquareType[] = Array(tableSize * tableSize).fill(null);

    const [squares2, setSquares2] = useState<SquareType[]>(initialSquares);
    const [turn, setTurn] = useState<"X" | "O">(initialData.startFirst === 0 ? "X" : "O");
    const [winnerList, setWinnerList] = useState<SquareType[]>([]);
    const [winner, setWinner] = useState<{ winner: SquareType; line: number[] } | null>(null);
    const [round, setRound] = useState(1);
    const [stepNumber, setStepNumber] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleSetWinner = (newWinner: SquareType[]) => {
        setWinnerList(newWinner);
    };
    const checkWinner = (squares: SquareType[], index: number) => {
        const theWinner = calculateWinner(squares, tableSize, index);
        if (theWinner) {
            setWinner(theWinner);
            handleSetWinner([...winnerList, theWinner.winner]);
        }

        setSquares2(squares);
        setStepNumber(squares.length);
        setCurrentIndex(index);
        setTurn(turn === "X" ? "O" : "X");

        if (squares.filter((i) => i === null).length === 0) {
            const playerXTime = parseInt((document.getElementById("caro-time-player-X") as HTMLInputElement).value || "0");
            const playerOTime = parseInt((document.getElementById("caro-time-player-O") as HTMLInputElement).value || "0");
            const winner: SquareType[] = playerXTime === playerOTime ? ["O", "X"] : playerXTime > playerOTime ? ["X"] : ["O"];
            handleSetWinner([...winnerList, ...winner]);
        }
    };
    const handleClick = (i: number) => {
        const newSquares = squares2.slice();
        if (newSquares[i]) return;
        newSquares[i] = turn;
        checkWinner(newSquares, i);
    };

    const startGameNow = () => {
        setSquares2(initialSquares);
        setStepNumber(0);
        setWinner(null);
        setCurrentIndex(-1);

        setRound((prev) => prev + 1);
        setTurn((round + initialData.startFirst) % 2 === 0 ? "X" : "O");
    };
    const handlePlayAgain = () => {
        setIsGameStart(false);
    };

    // useEffect(() => {
    //     console.log("initialData.player,turn", initialData.player, turn);
    //     if (initialData.player === 1 && turn === "O") {
    //         const newQuares = squares2.slice();
    //         if (stepNumber === 0) {
    //             const centerIndex = Math.floor(tableSize / 2) * tableSize + Math.floor(tableSize / 2);
    //             newQuares[centerIndex] = "O";
    //             setSquares2(newQuares);
    //             setStepNumber(newQuares.length);
    //             setCurrentIndex(centerIndex);
    //             setTurn("X");
    //             return;
    //         }
    //         const [, move] = minimax(newQuares.slice(), tableSize, false);
    //         if (!move) return;
    //         newQuares[move] = "O";

    //         checkWinner(newQuares,move);

    //     }
    // }, [initialData.player, turn, round]);
    useEffect(() => {
        const delayExecution = setTimeout(() => {
            console.log("initialData.player,turn", initialData.player, turn);
            if (initialData.player === 1 && turn === "O" &&  winnerList.length !== round) {
                const newQuares = squares2.slice();
                if (stepNumber === 0) {
                    const centerIndex = Math.floor(tableSize / 2) * tableSize + Math.floor(tableSize / 2);
                    newQuares[centerIndex] = "O";
                    setSquares2(newQuares);
                    setStepNumber(newQuares.length);
                    setCurrentIndex(centerIndex);
                    setTurn("X");
                    return;
                }
                console.log("level",initialData.level === 1.5 ? true : false);
                const [, move] = minimax(newQuares.slice(), tableSize, initialData.level === 1.5 ? true : false);
                if (!move) return;
                newQuares[move] = "O";

                checkWinner(newQuares, move);
            }
        }, (3 - initialData.level) *1000 ); // Delay 1 giây

        return () => clearTimeout(delayExecution); // Clear timeout nếu component unmount
    }, [initialData.player, turn, round]);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
            className="w-full flex items-center flex-col gap-5"
        >
            <div className="flex flex-col items-center">
                <h2 className={cn("text-2xl  font-bold tracking-widest", orbitron.className)}>Round {round}</h2>
                <CaroGameStatus
                    mode={initialData.mode}
                    player1Name={initialData.user1.name}
                    player2Name={initialData.user2.name}
                    round={round}
                    startGameNow={startGameNow}
                    winnerList={winnerList}
                    turn={turn}
                    handlePlayAgain={handlePlayAgain}
                />
            </div>
            <div className="flex-col smallLaptop:flex-row items-center gap-5  smallLaptop:items-start flex justify-center w-fit  mx-auto smallLaptop:w-full">
                <UserBox
                    user="X"
                    round={round}
                    className="justify-start smallLaptop:w-fit w-full "
                    winnerList={winnerList}
                    turn={turn}
                    time={initialData.time}
                    mode={initialData.mode}
                    stepNumber={stepNumber}
                    handleSetWinner={handleSetWinner}
                    imageName={initialData.user1.image}
                    opponentImage={initialData.user2.image}
                    name={initialData.user1.name}
                    won={winnerList.filter((i) => i === "X").length}
                    ltr={true}
                    disable={winnerList.length === 6 ? false : winnerList[round - 1] ? winnerList[round - 1] === "O" : turn === "O"}
                />
                <Board
                    squares={squares2}
                    onClick={(i: number) => (winnerList.length === round || (initialData.player === 1 && turn === "O") ? {} : handleClick(i))}
                    currentIndex={currentIndex}
                    tableSize={tableSize}
                    winner={winner}
                />
                <UserBox
                    user="O"
                    round={round}
                    winnerList={winnerList}
                    className="justify-start w-full smallLaptop:w-fit "
                    time={initialData.time}
                    mode={initialData.mode}
                    turn={turn}
                    handleSetWinner={handleSetWinner}
                    stepNumber={stepNumber}
                    imageName={initialData.user2.image}
                    opponentImage={initialData.user1.image}
                    name={initialData.user2.name}
                    won={winnerList.filter((i) => i === "O").length}
                    disable={winnerList.length === 6 ? false : winnerList[round - 1] ? winnerList[round - 1] === "X" : turn === "X"}
                />
            </div>
        </motion.div>
    );
};

export default Caro;
