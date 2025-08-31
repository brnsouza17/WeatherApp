export const Sidebar = ({ dailyForecast }) => {
    const date = new Date();
    const day = date.getDay();
    const daysOfWeek = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    const forecast = Array.isArray(dailyForecast) ? dailyForecast : [];

    return (
        <aside className="bg-zinc-600 rounded-4xl p-4">
            <h2 className="text-center font-semibold">Previsão para 7 dias</h2>
            <div className="h-full flex flex-col items-center justify-around py-5">
            {
                forecast.map((item, index) => {
                    const weekDayIndex = (day + index) % 7;
                    if (index === 0) return null;
                    return (
                        <div key={index} className="flex items-center justify-between w-full">
                            <span className="sm:text-base text-sm">
                                <p className="text-left">{daysOfWeek[weekDayIndex]}</p>
                            </span>
                            <span className="flex items-center">
                                <img
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt={item.weather[0].description}
                                    className="w-12 h-12 mr-auto select-none"
                                />
                                <p>{Math.ceil(item.temp.max - 273.15)}/{Math.ceil(item.temp.min - 273.15)}°C</p>
                                <p className="ml-2 font-light sm:text-sm text-xs w-[100px] text-right">{item.weather[0].description}</p>
                            </span>
                        </div>
                    );
                })
            }
            </div>
        </aside>
    )
}
