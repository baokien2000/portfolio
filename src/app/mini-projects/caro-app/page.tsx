import CaroContainer from "@/components/mini-projects/caro/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Caro App | Mini Projects",
};
export default function CaroApp() {
    return (
        <main className=" z-[1] relative text-white  min-h-screen">
            <CaroContainer />
        </main>
    );
}
