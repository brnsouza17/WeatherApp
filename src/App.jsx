import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MainComponent } from "./components/MainComponent";
import { WeatherInfo } from "./components/WeatherInfo";
import { HourlyForecast } from "./components/HourlyForecast";
import { Sidebar } from "./components/Sidebar";

const App = () => {
    const apiKey = import.meta.env.VITE_APIKEY;
    const [lat, setLat] = useState(-12.982);
    const [lon, setLon] = useState(-38.481);
    const [url, setUrl] = useState(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&lang=pt_br&appid=${apiKey}`);
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState("");
    let [cityOptions, setCityOptions] = useState([]);
    const [searching, setSearching] = useState(false);
    const [selectedCity, setSelectedCity] = useState();
    const [selectedCountry, setSelectedCountry] = useState();

    const getCityData = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);
            const data = await response.json();
            setCityOptions(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    const handleSubmit = (e) => {
        if (e.key == "Enter") {
            getCityData();
            setSearching(true);
        }
        if (e.type == "click") {
            getCityData();
            setSearching(true);
        }
    }

    useEffect(() => {
        const getWeatherData = async () => {
            setUrl(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&lang=pt_br&appid=${apiKey}`);
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
        }
        getWeatherData();
    }, [lat, lon, url, apiKey]);

    useEffect(() => {
        const getGeoData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`);
                const data = await response.json();
                setSelectedCity(data[0].name);
                setSelectedCountry(data[0].country);
            } catch (error) {
                console.error(error);
            }
        }
        getGeoData();
    }, [lat, lon, apiKey]);

    // weather info

    const temperature = weatherData.current ? Math.ceil(weatherData.current.temp - 273.15) + "°C" : null;
    const feelsLike = weatherData.current ? Math.ceil(weatherData.current.feels_like - 273.15) + "°C" : null;
    const description = weatherData.current ? weatherData.current.weather[0].description.charAt(0).toUpperCase() + weatherData.current.weather[0].description.slice(1) : null;
    const icon = weatherData.current ? weatherData.current.weather[0].icon : null;
    const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@4x.png` : null;
    const rain = weatherData.daily ? Math.ceil(weatherData.daily[0].pop * 100) : null;
    const humidity = weatherData.current ? weatherData.current.humidity : null;
    const windSpeed = weatherData.current ? Math.ceil(weatherData.current.wind_speed * 3.6) : null;

    // hourly forecast info

    const hourlyForecast2 = weatherData.hourly ? Math.ceil(weatherData.hourly[1].temp - 273.15) : null;
    const hourlyForecastIcon2 = weatherData.hourly ? weatherData.hourly[1].weather[0].icon : null;
    const hourlyForecastUrl2 = hourlyForecastIcon2 ? `https://openweathermap.org/img/wn/${hourlyForecastIcon2}@4x.png` : null;

    const hourlyForecast4 = weatherData.hourly ? Math.ceil(weatherData.hourly[3].temp - 273.15) : null;
    const hourlyForecastIcon4 = weatherData.hourly ? weatherData.hourly[3].weather[0].icon : null;
    const hourlyForecastUrl4 = hourlyForecastIcon4 ? `https://openweathermap.org/img/wn/${hourlyForecastIcon2}@4x.png` : null;

    const hourlyForecast6 = weatherData.hourly ? Math.ceil(weatherData.hourly[5].temp - 273.15) : null;
    const hourlyForecastIcon6 = weatherData.hourly ? weatherData.hourly[5].weather[0].icon : null;
    const hourlyForecastUrl6 = hourlyForecastIcon6 ? `https://openweathermap.org/img/wn/${hourlyForecastIcon2}@4x.png` : null;

    const hourlyForecast8 = weatherData.hourly ? Math.ceil(weatherData.hourly[7].temp - 273.15) : null;
    const hourlyForecastIcon8 = weatherData.hourly ? weatherData.hourly[7].weather[0].icon : null;
    const hourlyForecastUrl8 = hourlyForecastIcon8 ? `https://openweathermap.org/img/wn/${hourlyForecastIcon2}@4x.png` : null;

    const hourlyForecast10 = weatherData.hourly ? Math.ceil(weatherData.hourly[9].temp - 273.15) : null;
    const hourlyForecastIcon10 = weatherData.hourly ? weatherData.hourly[9].weather[0].icon : null;
    const hourlyForecastUrl10 = hourlyForecastIcon10 ? `https://openweathermap.org/img/wn/${hourlyForecastIcon2}@4x.png` : null;

    const hourlyForecast12 = weatherData.hourly ? Math.ceil(weatherData.hourly[11].temp - 273.15) : null;
    const hourlyForecastIcon12 = weatherData.hourly ? weatherData.hourly[11].weather[0].icon : null;
    const hourlyForecastUrl12 = hourlyForecastIcon12 ? `https://openweathermap.org/img/wn/${hourlyForecastIcon2}@4x.png` : null;

    // 7 day forecast

    const dailyForecast = weatherData.daily ? weatherData.daily : null;

    return (
        <>
            <Header 
                city={city} 
                setCity={setCity} 
                handleSubmit={handleSubmit} 
                cityOptions={cityOptions} 
                searching={searching} 
                setSearching={setSearching} 
                setLat={setLat} 
                setLon={setLon} 
            />
            <main className="text-white xl:px-40 sm:px-10 md:px-40 lg:px-60 px-2 mt-14 flex justify-center gap-6 xl:flex-row flex-col">
                <div className="flex flex-col gap-2.5">
                    <MainComponent 
                        selectedCity={selectedCity} 
                        selectedCountry={selectedCountry} 
                        temperature={temperature} 
                        feelsLike={feelsLike}
                        description={description}
                        iconUrl={iconUrl}
                    />
                    <WeatherInfo 
                        rain={rain}
                        humidity={humidity}
                        windSpeed={windSpeed}
                    />
                    <HourlyForecast 
                        hourlyForecast2={hourlyForecast2}
                        hourlyForecastUrl2={hourlyForecastUrl2}
                        hourlyForecast4={hourlyForecast4}
                        hourlyForecastUrl4={hourlyForecastUrl4}
                        hourlyForecast6={hourlyForecast6}
                        hourlyForecastUrl6={hourlyForecastUrl6}
                        hourlyForecast8={hourlyForecast8}
                        hourlyForecastUrl8={hourlyForecastUrl8}
                        hourlyForecast10={hourlyForecast10}
                        hourlyForecastUrl10={hourlyForecastUrl10}
                        hourlyForecast12={hourlyForecast12}
                        hourlyForecastUrl12={hourlyForecastUrl12}
                    />
                </div>
                <Sidebar 
                    dailyForecast={dailyForecast}
                />
            </main>
        </>
    )
}

export default App;
