import search from "../assets/search.svg";

export const Header = ({ city, setCity, handleSubmit, cityOptions, searching, setSearching, setLat, setLon }) => {
    const placeholder = "Pesquise por uma cidade";

    const handleBlur = (e) => {
        e.target.placeholder = placeholder;
        setSearching(false);
    }

    return (
        <header className="border-b-2 border-zinc-600 sm:h-[10%] h-[20%] flex items-center justify-center sm:px-20 md:px-40 xl:px-60 gap-4 relative px-0">
        <div className="sm:w-full flex items-center gap-4 sm:flex-row flex-col w-[80%]">
            <h1 className="text-white text-3xl font-semibold">WeatherApp</h1>
            <div className="relative w-full">
                <div className="flex justify-center items-center gap-2">
                    <input 
                        className="bg-zinc-600 rounded-[30px] lg:w-full w-[80%] h-10 sm:h-10 text-white placeholder:text-white outline-none sm:px-4 px-2"
                        type="text"
                        placeholder={placeholder}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onFocus={(e) => e.target.placeholder=""}
                        onBlur={handleBlur}
                        onKeyDown={handleSubmit}
                    />
                    <div className="bg-white h-[38px] w-[38px] rounded-full cursor-pointer flex items-center justify-center">
                        <img src={search} alt="Ícone de lupa" className="p-2 select-none" onClick={handleSubmit}/>
                    </div>
                </div>
                {searching == true && city ? (
                <ul className="absolute top-full left-0 w-full mt-1 bg-zinc-600 rounded-b-[30px] text-white shadow-lg z-10">
                    {cityOptions.map((item, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-zinc-500 cursor-pointer" onMouseDown={() => {setLat(item.lat); setLon(item.lon); setSearching(false);}}>
                            <span>{item.name}, {item.country}</span>
                            <img src={`https://flagsapi.com/${item.country}/flat/24.png`} alt={`bandeira ${item.country}`} className="inline mx-2" />
                            <span>{item.lat.toFixed(3)}, {item.lon.toFixed(3)}</span>
                        </li>
                    ))}
                </ul>
                ) : null
                }
            </div>
        </div>
        </header>

    )
}
