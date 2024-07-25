import React from "react";
interface CaroMoveListProps {
    history: { squares: ("X" | "O" | null)[] }[];
    setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    ASC: boolean;
}
const CaroMoveList = ({ history, setStepNumber, ASC }: CaroMoveListProps) => {
    const moves = history.map((step, index) => {
        const desc = index ? "Go to move #" + index : "Go to the game start";
        return (
            <li key={index} className="text-white">
                <button className="mt-1 mr-0 mb-1 ml-2 text-sm bigPhone:text-base bigPhone:w-full w-[150px]" onClick={() => setStepNumber(index)}>
                    {desc}
                </button>
            </li>
        );
    });

    return <ol className="overflow-y-auto h-[315px] bigPhone:h-[400px]">{ASC == true ? moves : moves.reverse()}</ol>;
};

export default CaroMoveList;
