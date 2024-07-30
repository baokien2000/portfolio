import { clearString } from "@/utils/format";

export const getWeather = async (city: string) => {
    const APIKEY = "8c84f12737b3e3d809711ccf050a0fc1";
    const payload = clearString(city);
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${APIKEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
        return null;
    }
};

