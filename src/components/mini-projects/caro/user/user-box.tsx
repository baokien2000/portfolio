import { cn } from "@/libs/cn";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import { numberToTime } from "@/utils/format";
interface UserBoxProps {
    className?: string;
    ltr?: boolean;
    imagePath: string;
    name: string;
    won: number;
    disable: boolean;
    time: number;
}
const UserBox = ({ className, ltr = false, imagePath, name, won, disable, time }: UserBoxProps) => {
    return (
        <div className={cn("flex gap-3 ", ltr ? " flex-row" : " flex-row-reverse", disable ? "opacity-50" : "")}>
            <div className={cn("size-20 relative border-2 rounded", ltr ? "border-red-500" : "border-blue-500")}>
                <Image src={imagePath} alt="avatar-player" fill sizes="100px" />
            </div>
            <div className={"flex flex-col  gap-1 leading-[1.2] " + (ltr ? " items-start" : " items-end")}>
                <p className="text-xl">{name}</p>
                <p className={cn("text-sm min-w-[90px] flex gap-1", ltr ? "text-left flex-row" : "text-right flex-row-reverse")}>
                    {" "}
                    <span>Time</span> <span>:</span>
                    <span>{numberToTime(time)}</span>{" "}
                </p>
                <div className="flex gap-1 mt-1">
                    <div className={"size-5 gradient-border rounded " + (won >= 1 && " bg-main-gradient")} />
                    <div className={"size-5 gradient-border rounded " + (won >= 2 && " bg-main-gradient")} />
                    <div className={"size-5 gradient-border rounded " + (won >= 3 && " bg-main-gradient")} />
                </div>
            </div>
        </div>
    );
};

export default UserBox;
