import Image from "next/image";
import React from "react";
interface UserBoxProps {
    className?: string;
    ltr?: boolean;
    imagePath: string;
    name: string;
    won: number;
}
const UserBox = ({ className, ltr = false, imagePath, name, won }: UserBoxProps) => {
    return (
        <div className={"flex gap-3 " + (ltr ? " flex-row" : " flex-row-reverse")}>
            <div className="size-20 relative gradient-border">
                <Image src={imagePath} alt="avatar-player" fill sizes="100px" />
            </div>
            <div className={"flex flex-col  gap-1 leading-[1.2] " + (ltr ? " items-start" : " items-end")}>
                <p className="text-xl">{name}</p>
                <p className="text-sm"> Time: 10:00</p>
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
