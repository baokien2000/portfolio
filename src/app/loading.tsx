import React from "react";
import logo from "../../public/assets/images/logo.jpeg";
import Image from "next/image";
export default function Loading() {
    return (
        <div className="top-0 left-0  flex gap-2 flex-col items-center justify-center fixed w-screen h-screen bg-black text-white">
            <Image height={120} priority className="animate-pulse" width={120} sizes="240px" src={logo} alt="Logo" />
        </div>
    );
}
