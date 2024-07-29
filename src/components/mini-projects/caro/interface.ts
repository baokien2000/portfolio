export interface ICaroData{
    mode: number;
    time: number;
    size: number;
    player: number;
    startFirst: number;
    level: number;
    user1: ICaroPlayer;
    user2: ICaroPlayer;
}



export interface ISettingVariableItem { 
    id: string;
    name: string;
    value:number
}
export interface ICaroPlayer{
    name: string;
    image: string;
}
export interface ISelectedSettings {
    mode: ISettingVariableItem;
    time: ISettingVariableItem;
    size: ISettingVariableItem;
    player: ISettingVariableItem;
    startFirst: ISettingVariableItem;
    level: ISettingVariableItem;
}
  
export interface GameSettingProps {
    selectedSettings: ISelectedSettings;
    setSelectedSetting: (key: keyof ISelectedSettings, value: ISettingVariableItem) => void
}

export interface SettingListboxProps {
    label: string;
    value: ISettingVariableItem;
    onChange: (value: ISettingVariableItem) => void
    options: ISettingVariableItem[];
    disabled?:boolean
}
export const modeList = [
    { id: "BO5", name: "BO5",value:5 },
    { id: "BO3", name: "BO3",value:3 },
    { id: "BO1", name: "BO1",value:1 },
];
export const timeList = [
    { id: "T10", name: "10 minute",value:600  },
    { id: "T5", name: "5 minute" ,value:300},
    { id: "T2", name: "2 minute"  ,value:120},
]
export const sizeList = [
    { id: "S16", name: "16*16" ,value:16 },
    { id: "S12", name: "12*12",value:12 },
    { id: "S10", name: "10*10" ,value:10},
]
export const playerList = [
    { id: "PVP", name: "Player",value:0 },
    { id: "PVE", name: "Computer",value:1 },
]
export enum PlayerType { 
    PVP=0,
    PVE=1
}
export const playerStartList = [
    { id: "P1", name: "X",value:0  },
    { id: "P2", name: "O" ,value:1},
]
export const levelList = [
    { id: "EASY", name: "Easy",value:1.5 },
    { id: "MEDIUM", name: "Medium",value:2 },
    { id: "HARD", name: "Hard",value:2.5 },
]
export enum LevelType { 
    EASY=1.5,
    MEDIUM=2,
    HARD=2.5
}

export const AvatarList = ["Butterfree","Digda","Eevee","Fushigidane","Gangar","Hitokage","Jirachi","Kabigon","Karakara","Koduck","Marumine","Metamon","Mew","Nazonokusa","Nyorozo","Purin","Rokon","Sand","Tamazarashi","Zenigame"    ]