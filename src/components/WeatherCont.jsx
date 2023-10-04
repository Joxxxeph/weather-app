import { useState } from "react";
import StatWeather from "./StatWeather";

const WeatherCont = ({ weather }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const converteTemp = (temp) => {
        if (isCelsius) {
            const celsiusTemp = (temp - 273.15).toFixed(0)
            return `${celsiusTemp}°`
        } else {
            const fahrenheitTemp = (((temp - 273.15) * 9/5) + 32).toFixed(0)
            return `${fahrenheitTemp}°`
        }
    }

    console.log(weather);

    const handleConverteTemp = () => {
        setIsCelsius(!isCelsius)
    }

  return (
    <section className="text-center grid gap-6 z-10">
        <h1 className="drop-shadow-2xl text-xl font-semibold dark:text-white duration-500 transition">{weather.name}, {weather.sys.country}</h1>

        <div className="grid gap-2.5 md:grid-cols-[1fr_auto]">
            <article className="bg-white/30 rounded-3xl drop-shadow-xl
            grid grid-cols-[1fr_auto] items-center py-6 px-8 dark:bg-gray-700/30 duration-500 transition-colors">
                <h4 className="col-span-2 text-lg capitalize dark:text-white duration-500 transition-colors"> {weather.weather[0].description} </h4>
                <span className="text-[6rem] font-extralight text-black dark:text-white duration-500 transition-colors">{converteTemp(weather.main.temp)}</span>
                <picture className="w-28 ">
                    <img 
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt=""  />
                </picture>
            </article>

            <article className="bg-white/30 rounded-3xl grid drop-shadow-xl
                            grid-cols-3 justify-items-center px-6 py-6
                            md:grid-cols-1 md:p-2 dark:bg-gray-700/30 duration-500 transition-colors">
                <StatWeather icon="/vientoB.png" unit="m/s" value={weather.wind.speed} />
                <StatWeather icon="/humedadB.png" unit="%" value={weather.main.humidity} />
                <StatWeather icon="/presionB.png" unit="hPa" value={weather.main.pressure} />
            </article>
        </div>
        <div className="justify-center m-5">
            <button onClick={handleConverteTemp} className="drop-shadow-xl bg-white text-blue-500 w-36 rounded-full py-1.5 duration-500 dark:text-white transition-colors dark:bg-blue-500">
                 {isCelsius ? "Change to °F" : "Change to °C"}
                 </button>
        </div>
    </section>
  )
}  
export default WeatherCont