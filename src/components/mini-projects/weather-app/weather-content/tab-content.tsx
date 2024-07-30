import React from "react";
import { WeatherData } from "../interface";

const TabContent = ({ data, selectedTab }: { data: WeatherData; selectedTab: string }) => {
    console.log("data", data);
    switch (selectedTab) {
        case "cloud":
            return (
                <>
                    <WeatherItem name="Weather" value={data.weather[0].main} />
                    <WeatherItem name="Description" value={data.weather[0].description} />
                    <WeatherItem name="Cloudiness" value={data.clouds.all + " %"} />
                    <WeatherItem name="Visibility" value={data.visibility + " m"} />
                </>
            );
        case "temperature":
            return (
                <>
                    <WeatherItem name="Temperature" value={data.main.temp + " °C"} />
                    <WeatherItem name="Feels Like" value={data.main.feels_like + " °C"} />
                    <WeatherItem name="Min Temperature" value={data.main.temp_min + " °C"} />
                    <WeatherItem name="Max Temperature" value={data.main.temp_max + " °C"} />
                </>
            );
        case "humidity":
            return (
                <>
                    <WeatherItem name="Humidity" value={data.main.humidity + " %"} />
                    <WeatherItem name="Rain 1h" value={data?.rain ? data?.rain["1h"] + " mm" : ""} />
                    <WeatherItem name="Rain 3h" value={data?.rain ? data?.rain["3h"] + " mm" : ""} />
                </>
            );
        case "wind":
            return (
                <>
                    <WeatherItem name="Wind Speed" value={data.wind.speed + " m/s"} />
                    <WeatherItem name="Wind Degree" value={data.wind.deg + " °"} />
                    <WeatherItem name="Wind Gust" value={data.wind?.gust ? data.wind?.gust + " m/s" : ""} />
                </>
            );
        case "pressure":
            return (
                <>
                    <WeatherItem name="Pressure" value={data.main.pressure + " hPa"} />
                    <WeatherItem name="Air Pressure" value={data.main.pressure + " hPa"} />
                </>
            );
        case "time":
            return (
                <>
                    <WeatherItem name="Sunrise" value={new Date(data.sys.sunrise * 1000).toLocaleTimeString()} />
                    <WeatherItem name="Sunset" value={new Date(data.sys.sunset * 1000).toLocaleTimeString()} />
                </>
            );
        case "snow":
            return (
                <>
                    <WeatherItem name="Snow 1h" value={data?.snow ? data?.snow["1h"] + " mm" : ""} />
                    <WeatherItem name="Snow 3h" value={data?.snow ? data?.snow["3h"] + " mm" : ""} />
                </>
            );
            break;
    }
};

export default TabContent;

const WeatherItem = ({ name, value }: { name: string; value: string }) => {
    return (
        <div className="flex justify-between items-center">
            <p>{name}</p>
            <p>{value}</p>
        </div>
    );
};
