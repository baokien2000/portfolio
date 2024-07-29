import { cn } from "@/libs/cn";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { AvatarList, ICaroPlayer } from "../interface";
import debounce from "lodash.debounce";
import "./style.css";
export default function UserAvatarModal({
    imageName,
    user,
    opponentImage,
    setPlayer,
}: {
    imageName: string;
    user: "X" | "O";
    opponentImage: string;
    setPlayer: React.Dispatch<React.SetStateAction<ICaroPlayer>>;
}) {
    let [isOpen, setIsOpen] = useState(false);
    const [hoverImage, setHoverImage] = useState("");
    const [selectedImage, setSelectedImage] = useState(imageName);
    function open() {
        setIsOpen(true);
    }

    function close() {
        setSelectedImage(imageName);
        setIsOpen(false);
    }
    const handleSelectImage = (close: () => void) => {
        setPlayer((prev) => ({ ...prev, image: selectedImage }));
        close();
    };
    return (
        <>
            <div
                onClick={open}
                className={cn("size-20 cursor-pointer relative border-2 rounded", user === "X" ? "border-red-500" : "border-blue-500")}
            >
                <Image src={`/assets/images/mini-projects/caro/${imageName}.png`} alt="avatar-player" fill sizes="100px" />
            </div>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full flex bigPhone:flex-row  flex-col gap-5 md:max-w-[620px] rounded-xl bg-white/5 p-6 backdropBlur backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div className="flex gap-3 flex-col">
                                <div
                                    onClick={open}
                                    className={cn(
                                        "size-[100px] min-w-[100px] md:size-[200px] md:min-w-[200px] cursor-pointer relative border-2 rounded",
                                        user === "X" ? "border-red-500" : "border-blue-500"
                                    )}
                                >
                                    <Image
                                        src={`/assets/images/mini-projects/caro/${hoverImage || selectedImage || imageName}.png`}
                                        alt="avatar-player"
                                        fill
                                        sizes="(max-width: 768px) 350px,500px"
                                    />
                                </div>
                                <button
                                    className={cn("w-full h-10 rounded  duration-200 transition-colors ", {
                                        "hover:bg-red-600 bg-red-500": user === "X",
                                        "hover:bg-blue-600 bg-blue-500": user === "O",
                                    })}
                                    onClick={() => handleSelectImage(close)}
                                >
                                    Select
                                </button>
                            </div>
                            <div onMouseLeave={() => setHoverImage("")} className="w-full flex gap-3 items-start justify-start flex-wrap">
                                {AvatarList.map((name, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onMouseEnter={() => setHoverImage(name)}
                                            onClick={() => setSelectedImage(name)}
                                            className={cn(
                                                "size-[60px] min-w-[60px] cursor-pointer relative border-2 rounded border-white/30",
                                                user === "X" ? "hover:border-red-500 " : "hover:border-blue-500",
                                                opponentImage === name &&
                                                    (user === "X" ? "!border-blue-500 pointer-events-none" : "!border-red-500 pointer-events-none"),
                                                selectedImage === name && (user === "X" ? "border-red-500 " : "border-blue-500")
                                            )}
                                        >
                                            <Image
                                                src={`/assets/images/mini-projects/caro/${name}.png`}
                                                alt={name}
                                                fill
                                                priority
                                                sizes="(max-width: 768px) 120px,150px"
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
