import React, { useEffect, useState } from "react";
import WeatherSearch from "./search";
import { getWeather } from "./api";
import { clearString } from "@/utils/format";
import WeatherContent from "./weather-content";
import { WeatherData } from "./interface";

const Weather = () => {
    const [cityName, setCityName] = useState("Ho Chi Minh"); // state chứa thông tin thành phố tìm kiếm
    const [data, setData] = useState<WeatherData | null>(null);

    useEffect(() => {
        if (!cityName || cityName?.length === 0) return;
        const input = clearString(cityName);
        console.log("input", input);
        getWeather(input).then((data) => {
            console.log("data", data);
            setData(data);
        });
    }, [cityName]);
    return (
        <div className="weather-app mx-auto w-full h-full flex-1 flex flex-col max-w-[500px] text-white">
            <WeatherSearch setCityName={setCityName} />
            <WeatherContent cityName={cityName} data={data} />
            {/* <WeatherAPI Data={Data} ErrorWeatherAPI={ErrorWeatherAPI} InputAPI={InputAPI} />  */}
        </div>
    );
};

export default Weather;
