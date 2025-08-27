import { useState } from "react";

export const HourlyForecast = ({ 
    hourlyForecast2,
    hourlyForecastUrl2,
    hourlyForecast4,
    hourlyForecastUrl4,
    hourlyForecast6,
    hourlyForecastUrl6,
    hourlyForecast8,
    hourlyForecastUrl8,
    hourlyForecast10,
    hourlyForecastUrl10,
    hourlyForecast12,
    hourlyForecastUrl12
}) => {
    const [date, setDate] = useState(new Date());
    setTimeout(() => {
        setDate(new Date());
    }, 10000);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    const formatHour = (h) => ((h % 24).toString().padStart(2, "0"));

    hours < 10 ? hours = "0" + hours : hours;
    minutes < 10 ? minutes = "0" + minutes : minutes;
    
    return (
        <div className="bg-zinc-600 rounded-4xl p-4 flex justify-between px-1 sm:px-[15%] min-h-[130px]">
            <div className="flex justify-between items-center flex-col gap-0">
                <p>{formatHour(hours + 2)}:{minutes}</p>
                <img src={hourlyForecastUrl2} alt="Ícone do clima" className="w-[50px]"/>
                <p>{hourlyForecast2}°C</p>
            </div>
            <div className="flex justify-between items-center flex-col">
                <p>{formatHour(hours + 4)}:{minutes}</p>
                <img src={hourlyForecastUrl4} alt="Ícone do clima" className="w-[50px]"/>
                <p>{hourlyForecast4}°C</p>
            </div>
            <div className="flex justify-between items-center flex-col">
                <p>{formatHour(hours + 6)}:{minutes}</p>
                <img src={hourlyForecastUrl6} alt="Ícone do clima" className="w-[50px]"/>
                <p>{hourlyForecast6}°C</p>
            </div>
            <div className="flex justify-between items-center flex-col">
                <p>{formatHour(hours + 8)}:{minutes}</p>
                <img src={hourlyForecastUrl8} alt="Ícone do clima" className="w-[50px]"/>
                <p>{hourlyForecast8}°C</p>
            </div>
            <div className="flex justify-between items-center flex-col">
                <p>{formatHour(hours + 10)}:{minutes}</p>
                <img src={hourlyForecastUrl10} alt="Ícone do clima" className="w-[50px]"/>
                <p>{hourlyForecast10}°C</p>
            </div>
            <div className="flex justify-between items-center flex-col">
                <p>{formatHour(hours + 12)}:{minutes}</p>
                <img src={hourlyForecastUrl12} alt="Ícone do clima" className="w-[50px]"/>
                <p>{hourlyForecast12}°C</p>
            </div>
        </div>
    )
}
