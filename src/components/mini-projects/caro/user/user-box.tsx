import { cn } from "@/libs/cn";
import Image from "next/image";
import React, { useCallback, useRef } from "react";
import dayjs from "dayjs";
import { numberToTime } from "@/utils/format";
import { motion, useInView } from "framer-motion";
import { animate } from "@tsparticles/engine";
import UserTime from "./user-time";
import { SquareType } from "../caro";
import UserAvatarModal from "./user-avatar-modal";
import { ICaroPlayer } from "../interface";
import debounce from "lodash.debounce";

interface UserBoxProps {
    className?: string;
    ltr?: boolean;
    imageName: string;
    opponentImage: string;
    name: string;
    won: number;
    disable: boolean;
    round: number;
    turn: "X" | "O";
    winnerList: SquareType[];
    user: "X" | "O";
    stepNumber: number;
    handleSetWinner?: (winner: SquareType[]) => void;
    time?: number;
    mode?: number;
    editable?: boolean;
    setPlayer?: React.Dispatch<React.SetStateAction<ICaroPlayer>>;
}
const motionAnimationOptions = {
    scale: [1, 1.5, 1],
    rotate: [0, 180, 360],
};

const UserBox = ({
    handleSetWinner,
    editable = false,
    setPlayer,
    stepNumber,
    user,
    time,
    mode = 5,
    ltr = false,
    imageName,
    opponentImage,
    name,
    won,
    disable,
    turn,
    round,
    winnerList,
    className,
}: UserBoxProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("im in");
        setPlayer && setPlayer((prev) => ({ ...prev, name: e.target.value }));
    };
    const debounceFn = useCallback(debounce(handleChangeName, 1000), []);
    return (
        <motion.div
            ref={ref}
            initial={{ x: user === "X" ? -50 : 50, opacity: 0 }}
            animate={{
                opacity: disable ? 0.5 : 1,
            }}
            whileInView={{
                x: 0,
                opacity: disable ? 0.5 : 1,
                transition: {
                    duration: isInView ? 0.2 : 1,
                    delay: isInView ? 0 : 1,
                },
            }}
            className={cn("flex gap-3 ", ltr ? " flex-row" : " flex-row-reverse", className)}
        >
            {editable ? (
                <UserAvatarModal setPlayer={setPlayer!} opponentImage={opponentImage} user={user} imageName={imageName} />
            ) : (
                <div className={cn("size-20 relative border-2 rounded", user === "X" ? "border-red-500" : "border-blue-500")}>
                    <Image src={`/assets/images/mini-projects/caro/${imageName}.png`} alt="avatar-player" fill sizes="100px" />
                </div>
            )}
            <div className={"flex flex-col  gap-1 leading-[1.2] " + (ltr ? " items-start" : " items-end")}>
                {editable ? (
                    <input
                        maxLength={20}
                        onChange={debounceFn}
                        className={cn(
                            "max-w-[120px] text-xl bg-transparent focus:outline  focus:outline-2 rounded focus:outline-offset-0 ",
                            user === "X" ? "outline-red-500" : "outline-blue-500",
                        )}
                        defaultValue={name}
                    />
                ) : (
                    <p className="text-xl">{name}</p>
                )}
                <p className={cn("text-sm min-w-[90px] flex gap-1", ltr ? "text-left flex-row" : "text-right flex-row-reverse")}>
                    <span>Time</span> <span>:</span>
                    <UserTime
                        user={user}
                        initialTime={time}
                        handleSetWinner={handleSetWinner}
                        stepNumber={stepNumber}
                        winnerList={winnerList}
                        currentTurn={turn === user}
                        round={round}
                    />
                </p>
                <div className="flex gap-1 mt-1">
                    <motion.div
                        animate={won >= 1 ? motionAnimationOptions : {}}
                        className={"size-5 gradient-border rounded " + (won >= 1 && " bg-main-gradient")}
                    />
                    {mode > 1 && (
                        <motion.div
                            animate={won >= 2 ? motionAnimationOptions : {}}
                            className={"size-5 gradient-border rounded " + (won >= 2 && " bg-main-gradient")}
                        />
                    )}
                    {mode > 3 && (
                        <motion.div
                            animate={won >= 3 ? motionAnimationOptions : {}}
                            className={"size-5 gradient-border rounded " + (won >= 3 && " bg-main-gradient")}
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default UserBox;
