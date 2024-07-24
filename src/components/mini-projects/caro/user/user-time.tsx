import { numberToTime } from "@/utils/format";
import React, { useEffect, useRef } from "react";
import { SquareType } from "../caro";

const UserTime = ({
    round,
    stepNumber,
    winnerList,
    currentTurn,
    handleSetWinner,
    user,
}: {
    stepNumber: number;
    round: number;
    winnerList: SquareType[];
    currentTurn: boolean;
    handleSetWinner: (winner: SquareType[]) => void;
    user: "X" | "O";
}) => {
    const [time, setTime] = React.useState(600);
    const timeRef = useRef<NodeJS.Timeout | null>(null); // Sử dụng để lưu trữ ID của interval
    useEffect(() => {
        if (currentTurn && round > winnerList.length && stepNumber > 0) {
            timeRef.current = setInterval(() => {
                setTime((prev) => {
                    if (prev - 0.25 === 0) {
                        handleSetWinner([...winnerList, user === "X" ? "O" : "X"]);
                        clearInterval(timeRef.current!);
                        timeRef.current = null;
                    }
                    return prev - 0.25;
                });
            }, 250);
        } else {
            clearInterval(timeRef.current!);
            timeRef.current = null;
        }
    }, [round, currentTurn, winnerList]);
    useEffect(() => {
        setTime(10);
    }, [round]);

    return (
        <>
            <span>{numberToTime(time)}</span>
            <input id={"caro-time-player-" + user} type="number" className="hidden" value={time} />
        </>
    );
};

export default UserTime;
