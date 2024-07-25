import DigitalClockContainer from "@/components/mini-projects/digital-clock/container";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Digita lClock | Mini Projects",
};
export default function DigitalClock() {
    return (
        <main className=" z-[1] relative text-white bg-transparent min-h-screen max-w-screen-laptop mx-auto">
            <DigitalClockContainer />
        </main>
    );
}
