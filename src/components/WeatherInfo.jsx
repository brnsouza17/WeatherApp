import rainy from '../assets/rainy.svg';
import water from '../assets/water.svg';
import wind from '../assets/wind.svg';

export const WeatherInfo = ({ rain, humidity, windSpeed }) => {
    return (
        <div className="bg-zinc-600 rounded-4xl justify-around p-1 sm:p-4 flex sm:justify-between sm:px-[15%] min-h-[130px] items-center">
            <span>
                <span>
                    <img src={rainy} alt="Ícone de chuva" className="w-[32px] inline sm:mr-[6px]"/>
                    <span className="sm:text-lg text-sm">Chuva</span>
                </span>
                <p className="text-center font-semibold text-xl">{rain}%</p>
            </span>
            <span>
                <span>
                    <img src={water} alt="Ícone de humidade" className="w-[32px] inline mr-[6px]"/>
                    <span className="sm:text-lg text-sm">Humidade</span>
                </span>
                <p className="text-center font-semibold text-xl">{humidity}%</p>
            </span>
            <span>
                <span>
                    <img src={wind} alt="Ícone de humidade" className="w-[32px] inline mr-[6px]"/>
                    <span className="sm:text-lg text-sm">Vento</span>
                </span>
                <p className="text-center font-semibold text-xl">{windSpeed}km/h</p>
            </span>
        </div>
    )
}
