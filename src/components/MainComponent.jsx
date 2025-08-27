import { CurrentDate } from "./CurrentDate";

export const MainComponent = ({ selectedCity, selectedCountry, temperature, feelsLike, description, iconUrl }) => {
    return (
        <div className="main-component flex items-center p-4 w-fit mx-auto xl:mx-0 sm:flex-row flex-col">
            <div className="sm:text-left text-center">
                <CurrentDate />
                <p className="font-semibold text-4xl">{selectedCity}, {selectedCountry}</p>
                <p className="font-semibold text-5xl">{temperature}</p>
                <p className="mt-3.5">Sensação térmica de {feelsLike}. {description}</p>
            </div>
            {iconUrl ? <img src={iconUrl} alt="Ícone do clima" className="select-none"/> : null}
        </div>
    )
}
