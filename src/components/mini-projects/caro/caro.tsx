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

    const gameCountDownRef = useRef<NodeJS.Timeout | null>(null); // Sử dụng để lưu trữ ID của interval
    const player1CountDownRef = useRef<NodeJS.Timeout | null>(null); // Sử dụng để lưu trữ ID của interval
    const player2CountDownRef = useRef<NodeJS.Timeout | null>(null); // Sử dụng để lưu trữ ID của interval

    const [gameCountDown, setGameCountDown] = useState(0);
    const [player1CountDown, setPlayer1CountDown] = useState(600);
    const [player2CountDown, setPlayer2CountDown] = useState(600);

    const clearTimeCountDown = (timeRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
        if (!timeRef.current) return;
        clearInterval(timeRef.current);
        timeRef.current = null; // Đặt lại ref sau khi clear
    };
    const handleSetWinner = (newWinner: SquareType[]) => {
        setWinnerList(newWinner);

        const isGameOver = newWinner.filter((i) => i === "O").length >= 3 || newWinner.filter((i) => i === "X").length >= 3;
        if (!isGameOver) {
            setGameCountDown(30);
            gameCountDownRef.current = setInterval(() => {
                setGameCountDown((prev) => {
                    if (prev - 1 === 0) startGameNow();
                    return prev - 1;
                });
            }, 1000);
        }
        clearTimeCountDown(player1CountDownRef);
        clearTimeCountDown(player2CountDownRef);
    };

    const handleClick = (i: number) => {
        const newHistory = history.slice(0, stepNumber + 1);
        const current = newHistory[newHistory.length - 1];
        const squares = current.squares.slice();

        if (squares[i]) {
            return;
        }

        if (turn === "X") {
            clearTimeCountDown(player1CountDownRef);
            // player2CountDownRef.current = setInterval(() => {
            //     setPlayer2CountDown((prev) => {
            //         if (prev - 0.25 === 0) handleSetWinner([...winnerList, "X"]);
            //         return prev - 0.25;
            //     });
            // }, 250);
        } else {
            clearTimeCountDown(player2CountDownRef);
            // player1CountDownRef.current = setInterval(() => {
            //     setPlayer1CountDown((prev) => {
            //         if (prev - 0.25 === 0) handleSetWinner([...winnerList, "O"]);
            //         return prev - 0.25;
            //     });
            // }, 250);
        }
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
            handleSetWinner([...winnerList, player1CountDown > player2CountDown ? "X" : "O"]);
        }
    };
    const startGameNow = () => {
        setHistory(initialHistory);
        setStepNumber(0);
        setWinner(null);
        setCurrent(-1);
        setRound((prev) => prev + 1);
        setTurn(round % 2 === 0 ? "X" : "O");
        setGameCountDown(0);

        setPlayer1CountDown(600);
        setPlayer2CountDown(600);
        clearTimeCountDown(gameCountDownRef);
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

    useEffect(() => {
        return () => {
            if (gameCountDownRef.current) clearInterval(gameCountDownRef.current);
            if (player1CountDownRef.current) clearInterval(player1CountDownRef.current);
            if (player2CountDownRef.current) clearInterval(player2CountDownRef.current);
        };
    }, []);
    return (
        <div className="w-full flex items-center flex-col gap-5">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl">Round {round}</h2>
                <CaroGameStatus
                    player1Name="BaoKien"
                    player2Name="Player2"
                    startGameNow={startGameNow}
                    winnerList={winnerList}
                    turn={turn}
                    handlePlayAgain={handlePlayAgain}
                    gameCountDown={gameCountDown}
                />
            </div>
            {/* <button onClick={() => setWinnerList((prev) => [...prev, "X"])}>click</button> */}
            <div className="flex-col bigPhone:flex-row items-center gap-5  bigPhone:items-start flex justify-center w-full">
                <UserBox
                    time={player1CountDown}
                    imagePath="/assets/images/mini-projects/caro/purin.png"
                    name="Bao Kien"
                    won={winnerList.filter((i) => i === "X").length}
                    ltr={true}
                    disable={winnerList[round - 1] ? winnerList[round - 1] === "O" : turn === "O"}
                />
                <Board
                    squares={history[stepNumber].squares}
                    onClick={(i: number) => (winnerList.length === round ? {} : handleClick(i))}
                    current={current}
                    tableSize={tableSize}
                    winner={winner}
                />
                <UserBox
                    time={player2CountDown}
                    imagePath="/assets/images/mini-projects/caro/evee.png"
                    name="Player 2"
                    won={winnerList.filter((i) => i === "O").length}
                    disable={winnerList[round - 1] ? winnerList[round - 1] === "X" : turn === "X"}
                />
            </div>
        </div>
    );
};

export default Caro;
