import React, { useEffect, useRef, useState } from "react";
import calculateWinner from "./board/calculateWinner";
import Board from "./board";
import UserBox from "./user/user-box";
import CaroGameStatus from "./control/status";

export type SquareType = "X" | "O" | null;
export type HistoryType = { squares: SquareType[] }[];

const tableSize = 16;
const initialHistory: HistoryType = [{ squares: Array(tableSize * tableSize).fill(null) }];
const Caro = () => {
    const [history, setHistory] = useState<HistoryType>(initialHistory);
    const [turn, setTurn] = useState<"X" | "O">("X");
    const [winnerList, setWinnerList] = useState<SquareType[]>([]);
    const [winner, setWinner] = useState<{ winner: SquareType; line: number[] } | null>(null);
    const [round, setRound] = useState(1);
    const [stepNumber, setStepNumber] = useState(0);
    const [current, setCurrent] = useState(-1);
    const [player1, setPlayer1] = useState("Purin");
    const [player2, setPlayer2] = useState("Evee");

    const handleSetWinner = (newWinner: SquareType[]) => {
        setWinnerList(newWinner);
    };

    const handleClick = (i: number) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();

        if (squares[i]) return;

        squares[i] = turn;
        const theWinner = calculateWinner(squares, tableSize, i);
        if (theWinner) {
            setWinner(theWinner);
            handleSetWinner([...winnerList, theWinner.winner]);
        }

        setHistory(newHistory.concat([{ squares: squares }]));
        setStepNumber(newHistory.length);
        setCurrent(i);
        setTurn(turn === "X" ? "O" : "X");
        if (squares.filter((i) => i === null).length === 0) {
            const playerXTime = parseInt((document.getElementById("caro-time-player-X") as HTMLInputElement).value || "0");
            const playerOTime = parseInt((document.getElementById("caro-time-player-O") as HTMLInputElement).value || "0");
            const winner: SquareType[] = playerXTime === playerOTime ? ["O", "X"] : playerXTime > playerOTime ? ["X"] : ["O"];
            handleSetWinner([...winnerList, ...winner]);
        }
    };
    const startGameNow = () => {
        setHistory(initialHistory);
        setStepNumber(0);
        setWinner(null);
        setCurrent(-1);
        setRound((prev) => prev + 1);
        setTurn(round % 2 === 0 ? "X" : "O");
    };
    const handlePlayAgain = () => {
        setHistory(initialHistory);
        setStepNumber(0);
        setCurrent(-1);
        setWinner(null);
        setRound(1);
        setTurn("X");
        setWinnerList([]);
    };

    return (
        <div className="w-full flex items-center flex-col gap-5">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl">Round {round}</h2>
                <CaroGameStatus
                    player1Name={player1}
                    player2Name={player2}
                    round={round}
                    startGameNow={startGameNow}
                    winnerList={winnerList}
                    turn={turn}
                    handlePlayAgain={handlePlayAgain}
                    // gameCountDown={gameCountDown}
                />
                {/* <button onClick={() => setWinnerList(["X", "X", "O", "O"])}>click</button> */}
                {/* <button onClick={() => setWinnerList((prev) => [...prev, "O", "X"])}>click 2</button> */}
            </div>
            {/* <button onClick={() => setWinnerList((prev) => [...prev, "X"])}>click</button> */}
            <div className="flex-col bigPhone:flex-row items-center gap-5  bigPhone:items-start flex justify-center w-full">
                <UserBox
                    user="X"
                    round={round}
                    winnerList={winnerList}
                    turn={turn}
                    stepNumber={stepNumber}
                    handleSetWinner={handleSetWinner}
                    imagePath="/assets/images/mini-projects/caro/purin.png"
                    name={player1}
                    won={winnerList.filter((i) => i === "X").length}
                    ltr={true}
                    disable={winnerList.length === 6 ? false : winnerList[round - 1] ? winnerList[round - 1] === "O" : turn === "O"}
                />
                <Board
                    squares={history[stepNumber].squares}
                    onClick={(i: number) => (winnerList.length === round ? {} : handleClick(i))}
                    current={current}
                    tableSize={tableSize}
                    winner={winner}
                />
                <UserBox
                    user="O"
                    round={round}
                    winnerList={winnerList}
                    turn={turn}
                    handleSetWinner={handleSetWinner}
                    stepNumber={stepNumber}
                    imagePath="/assets/images/mini-projects/caro/evee.png"
                    name={player2}
                    won={winnerList.filter((i) => i === "O").length}
                    disable={winnerList.length === 6 ? false : winnerList[round - 1] ? winnerList[round - 1] === "X" : turn === "X"}
                />
            </div>
        </div>
    );
};

export default Caro;
