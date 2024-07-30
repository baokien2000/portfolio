import WeatherContainer from "@/components/mini-projects/weather-app/container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Weather App | Mini Projects",
};
export default function WeatherApp() {
    return (
        <main className=" z-[1] relative text-white  min-h-screen">
            <WeatherContainer />
        </main>
    );
}
