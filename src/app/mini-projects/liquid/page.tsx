import LiquidContainer from "@/components/mini-projects/liquid/container";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Liquid CSS | Mini Projects",
};
export default function Liquid() {
    return (
        <main className=" z-[1] relative text-white  min-h-screen">
            <LiquidContainer />
        </main>
    );
}
