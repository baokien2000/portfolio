"use client";
import { cn } from "@/libs/cn";
import { Orbitron } from "next/font/google";
import React, { useState } from "react";
import StartUserContainer from "./start/start-user";
import { motion } from "framer-motion";
import {
    ICaroData,
    ICaroPlayer,
    ISelectedSettings,
    ISettingVariableItem,
    levelList,
    LevelType,
    modeList,
    playerList,
    playerStartList,
    PlayerType,
    sizeList,
    timeList,
} from "./interface";
import GameSetting from "./start/game-setting";
const orbitron = Orbitron({ subsets: ["latin"] });

const StartRoom = ({ onStart, initialData }: { onStart: (data: ICaroData) => void; initialData: ICaroData }) => {
    const [player1, setPlayer1] = useState<ICaroPlayer>({
        name: initialData.user1.name,
        image: initialData.user1.image,
    });
    const [player2, setPlayer2] = useState<ICaroPlayer>({
        name: initialData.user2.name,
        image: initialData.user2.image,
    });
    const [selectedSettings, setSelectedSettings] = useState<ISelectedSettings>({
        mode: modeList.find((mode) => mode.value === initialData.mode) || modeList[0],
        time: timeList.find((time) => time.value === initialData.time) || timeList[0],
        size: sizeList.find((size) => size.value === initialData.size) || sizeList[0],
        player: playerList.find((player) => player.value === initialData.player) || playerList[0],
        startFirst: playerStartList.find((start) => start.value === initialData.startFirst) || playerStartList[0],
        level: levelList.find((level) => level.value === initialData.level) || levelList[0],
    });
    console.log("selectedSettings", selectedSettings);
    const setSelectedSetting = (key: keyof ISelectedSettings, value: ISettingVariableItem) => {
        if (key === "player") {
            setPlayer2((prev) => ({
                ...prev,
                name:
                    value.value === PlayerType.PVP
                        ? "Player 2"
                        : `Zygarde ${
                              selectedSettings.level.value === LevelType.MEDIUM ? 50 : selectedSettings.level.value === LevelType.EASY ? 10 : 100
                          }`,
                image:
                    value.value === PlayerType.PVP
                        ? "question-mark-v3"
                        : `Zygarde_${
                              selectedSettings.level.value === LevelType.MEDIUM ? 50 : selectedSettings.level.value === LevelType.EASY ? 10 : 100
                          }`,
            }));
        }
        if (key === "level") {
            setPlayer2((prev) => ({
                ...prev,
                name: value.value === LevelType.MEDIUM ? "Zygarde 50" : value.value === LevelType.EASY ? "Zygarde 10" : "Zygarde 100",
                image: `Zygarde_${value.value === LevelType.MEDIUM ? 50 : value.value === LevelType.EASY ? 10 : 100}`,
            }));
        }
        setSelectedSettings((prevSettings) => ({
            ...prevSettings,
            [key]: value,
        }));
    };

    const handleStart = () => {
        const payload: ICaroData = {
            mode: selectedSettings.mode.value,
            time: selectedSettings.time.value,
            size: selectedSettings.size.value,
            player: selectedSettings.player.value,
            startFirst: selectedSettings.startFirst.value,
            level: selectedSettings.level.value,
            user1: player1,
            user2: player2,
        };
        onStart(payload);
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5 } }}
            exit={{ opacity: 0 }}
            className="w-full absolute top-[120px] left-0 flex items-center flex-col gap-5 sm:gap-10 h-full flex-1 "
        >
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 1,
                    },
                }}
                className="flex flex-col items-center"
            >
                <button onClick={handleStart}>
                    <p
                        className={cn(
                            orbitron.className,
                            "bg-white hover:bg-main-gradient text-transparent bg-clip-text text-4xl  font-bold tracking-widest"
                        )}
                    >
                        Start
                    </p>
                </button>
            </motion.div>
            <div className="flex-col  items-center gap-5 sm:gap-10 flex justify-center w-full">
                <StartUserContainer
                    player1={player1}
                    player2={player2}
                    player={selectedSettings.player.value}
                    setPlayer1={setPlayer1}
                    setPlayer2={setPlayer2}
                    time={selectedSettings.time.value}
                    mode={selectedSettings.mode.value}
                />

                <GameSetting selectedSettings={selectedSettings} setSelectedSetting={setSelectedSetting} />
            </div>
        </motion.div>
    );
};

export default StartRoom;
