import React from "react";
import UserBox from "../user/user-box";
import { ICaroPlayer, PlayerType } from "../interface";
interface StartUserContainerProps {
    time: number;
    mode: number;
    player: number;
    player1: ICaroPlayer;
    player2: ICaroPlayer;
    setPlayer1: React.Dispatch<React.SetStateAction<ICaroPlayer>>;
    setPlayer2: React.Dispatch<React.SetStateAction<ICaroPlayer>>;
}
const StartUserContainer = ({ time, mode, player, player1, player2, setPlayer1, setPlayer2 }: StartUserContainerProps) => {
    return (
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-5 ">
            <UserBox
                editable
                user="X"
                className="min-w-[220px]"
                round={1}
                winnerList={[]}
                turn={"X"}
                time={time}
                mode={mode}
                setPlayer={setPlayer1}
                stepNumber={0}
                opponentImage={player2.image}
                imageName={player1.image}
                name={player1.name}
                won={0}
                ltr={true}
                disable={false}
            />
            <UserBox
                editable={player === PlayerType.PVP}
                user="O"
                round={1}
                className="min-w-[220px]"
                setPlayer={setPlayer2}
                ltr={true}
                winnerList={[]}
                turn={"O"}
                stepNumber={0}
                opponentImage={player1.image}
                imageName={player2.image}
                name={player2.name}
                time={time}
                mode={mode}
                won={0}
                disable={false}
            />
        </div>
    );
};

export default StartUserContainer;
