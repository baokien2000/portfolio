import { cn } from "@/libs/cn";
import Image from "next/image";
import React, { useRef } from "react";
import dayjs from "dayjs";
import { numberToTime } from "@/utils/format";
import { motion, useInView } from "framer-motion";
import { animate } from "@tsparticles/engine";
import UserTime from "./user-time";
import { SquareType } from "../caro";
interface UserBoxProps {
    className?: string;
    ltr?: boolean;
    imagePath: string;
    name: string;
    won: number;
    disable: boolean;
    round: number;
    turn: "X" | "O";
    winnerList: SquareType[];
    user: "X" | "O";
    stepNumber: number;
    handleSetWinner: (winner: SquareType[]) => void;
}
const motionAnimationOptions = {
    scale: [1, 1.5, 1],
    rotate: [0, 180, 360],
};

const UserBox = ({ handleSetWinner,stepNumber,className, user, ltr = false, imagePath, name, won, disable, turn, round, winnerList }: UserBoxProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    console.log("inView", turn, user);
    return (
        <motion.div
            ref={ref}
            initial={{ x: ltr ? -50 : 50, opacity: 0 }}
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
            className={cn("flex gap-3 ", ltr ? " flex-row" : " flex-row-reverse")}
        >
            <div className={cn("size-20 relative border-2 rounded", ltr ? "border-red-500" : "border-blue-500")}>
                <Image  src={imagePath} alt="avatar-player" fill sizes="100px" />
            </div>
            <div className={"flex flex-col  gap-1 leading-[1.2] " + (ltr ? " items-start" : " items-end")}>
                <p className="text-xl">{name}</p>
                <p className={cn("text-sm min-w-[90px] flex gap-1", ltr ? "text-left flex-row" : "text-right flex-row-reverse")}>
                    <span>Time</span> <span>:</span>
                    <UserTime user={user} handleSetWinner={handleSetWinner} stepNumber={stepNumber} winnerList={winnerList} currentTurn={turn === user} round={round} />
                </p>
                <div className="flex gap-1 mt-1">
                    <motion.div
                        animate={won >= 1 ? motionAnimationOptions : {}}
                        className={"size-5 gradient-border rounded " + (won >= 1 && " bg-main-gradient")}
                    />
                    <motion.div
                        animate={won >= 2 ? motionAnimationOptions : {}}
                        className={"size-5 gradient-border rounded " + (won >= 2 && " bg-main-gradient")}
                    />
                    <motion.div
                        animate={won >= 3 ? motionAnimationOptions : {}}
                        className={"size-5 gradient-border rounded " + (won >= 3 && " bg-main-gradient")}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default UserBox;
