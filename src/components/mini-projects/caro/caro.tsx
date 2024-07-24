import React, { useEffect, useState } from "react";
import calculateWinner from "./board/calculateWinner";
export type SquareType = "X" | "O" | null;
export type HistoryType = { squares: SquareType[] }[];
import CaroStepSort from "./control/sort";
import CaroGameStatus from "./control/status";
import CaroMoveList from "./control/move-list";
import Board from "./board";
import Image from "next/image";
import UserBox from "./user/user-box";
const Caro = () => {
    const tableSize = 12;
    const [history, setHistory] = useState<HistoryType>([
        {
            squares: Array(tableSize * tableSize).fill(null),
        },
    ]);
    const [winner, setWinner] = useState<SquareType[]>([]);
    const [stepNumber, setStepNumber] = useState(0);
    const [current, setCurrent] = useState(0);
    const [ASC, setASC] = useState(true);

    const handleClick = (i: number) => {
        const History = history.slice(0, stepNumber + 1);
        const current = History[History.length - 1];
        const squares = current.squares.slice();

        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        squares[i] = stepNumber % 2 === 0 ? "X" : "O";

        setHistory(History.concat([{ squares: squares }]));
        setStepNumber(History.length);
        setCurrent(i);
    };
    useEffect(() => {
        const winner = calculateWinner(history[stepNumber].squares);
        if (winner) {
            setWinner((prev) => [...prev, winner.winner]);
        }
    }, [history.length]);
    return (
        <div className="w-full flex items-center flex-col gap-5">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl">Round {winner.length + 1}</h2>
                <div className="flex gap-2">
                    Turn: <p className="w-2">{stepNumber % 2 === 0 ? "X" : "O"}</p>
                </div>
                {/* <div className="game-info h-fit w-fit  bigPhone:w-1/3">
                <CaroGameStatus history={history} stepNumber={stepNumber} />
                <CaroStepSort setASC={setASC} />
                <CaroMoveList ASC={ASC} history={history} setStepNumber={setStepNumber} />
            </div> */}
            </div>
            <div className="flex-col bigPhone:flex-row items-center gap-5  bigPhone:items-start flex justify-center w-full">
                <UserBox
                    imagePath="/assets/images/mini-projects/caro/purin.png"
                    name="Bao Kien"
                    won={winner.filter((i) => i === "X").length}
                    ltr={true}
                />
                <Board
                    setWinner={setWinner}
                    squares={history[stepNumber].squares}
                    onClick={(i: number) => handleClick(i)}
                    current={current}
                    tableSize={tableSize}
                />
                <UserBox imagePath="/assets/images/mini-projects/caro/evee.png" name="Player 2" won={winner.filter((i) => i === "O").length} />
            </div>
        </div>
    );
};

export default Caro;
