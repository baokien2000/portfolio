import { cn } from "@/libs/cn";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import React from "react";

import {
    GameSettingProps,
    ISettingVariableItem,
    levelList,
    modeList,
    playerList,
    playerStartList,
    SettingListboxProps,
    sizeList,
    timeList,
} from "../interface";
import { motion } from "framer-motion";
const SettingListbox: React.FC<SettingListboxProps> = ({ label, value, onChange, options, disabled = false }) => (
    <Listbox disabled={disabled} value={value} onChange={onChange}>
        <ListboxButton
            className={cn(
                "relative flex justify-between disabled:opacity-50 items-center w-fit min-w-[220px] rounded bg-white/5 py-1.5 px-3 text-left text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
        >
            <span>{label}:</span> <span>{value.name}</span>
        </ListboxButton>
        <ListboxOptions
            className={cn(
                "w-[var(--button-width)]  z-10 rounded border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
            )}
        >
            {options.map((item) => (
                <ListboxOption
                    key={item.name}
                    value={item}
                    className="group flex cursor-pointer justify-end items-center gap-2 rounded py-1.5 px-3 select-none data-[focus]:bg-white/10"
                >
                    <div className="text-sm/6 text-right text-white">{item.name}</div>
                </ListboxOption>
            ))}
        </ListboxOptions>
    </Listbox>
);

const GameSetting: React.FC<GameSettingProps> = ({ selectedSettings, setSelectedSetting }) => {
    return (
        <motion.div
            initial={{
                y: 20,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                },
            }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5"
        >
            <div className="flex flex-col gap-2">
                <SettingListbox
                    label="Mode"
                    value={selectedSettings.mode}
                    onChange={(value: ISettingVariableItem) => setSelectedSetting("mode", value)}
                    options={modeList}
                />
                <SettingListbox
                    label="Time"
                    value={selectedSettings.time}
                    onChange={(value: ISettingVariableItem) => setSelectedSetting("time", value)}
                    options={timeList}
                />
                <SettingListbox
                    label="Play with"
                    value={selectedSettings.player}
                    onChange={(value: ISettingVariableItem) => setSelectedSetting("player", value)}
                    options={playerList}
                    disabled={true}
                />
            </div>
            <div className="flex flex-col gap-2">
                <SettingListbox
                    label="Start first"
                    value={selectedSettings.startFirst}
                    onChange={(value: ISettingVariableItem) => setSelectedSetting("startFirst", value)}
                    options={playerStartList}
                />
                <SettingListbox
                    label="Size"
                    value={selectedSettings.size}
                    onChange={(value: ISettingVariableItem) => setSelectedSetting("size", value)}
                    options={sizeList}
                />
                <SettingListbox
                    label="Difficulty Level"
                    value={selectedSettings.level}
                    onChange={(value: ISettingVariableItem) => setSelectedSetting("level", value)}
                    options={levelList}
                    disabled={selectedSettings.player.id === "PVP"}
                />
            </div>
        </motion.div>
    );
};

export default GameSetting;
