import { useEffect, useState } from "react";
import StatWeather from "./StatWeather";
import WeatherSearch from "./WeatherSearch";

const WeatherCont = ({ weather, setWeather }) => {

    const [isCelsius, setIsCelsius] = useState(true)
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme === "darck") {
          document.querySelector("html").classList.add("dark")
        } else {
          document.querySelector("html").classList.remove("dark")
  
        }
      }, [theme])

    const converteTemp = (temp) => {
        if (isCelsius) {
            const celsiusTemp = (temp - 273.15).toFixed(0)
            return `${celsiusTemp}°`
        } else {
            const fahrenheitTemp = (((temp - 273.15) * 9/5) + 32).toFixed(0)
            return `${fahrenheitTemp}°`
        }
    }


    const handleConverteTemp = () => {
        setIsCelsius(!isCelsius)
    }

    const handleTheme = () => {
        setTheme(prevTheme => prevTheme === "light" ? "darck" : "light")
      }

  return (
    <section className="text-center grid gap-6 z-10 transition duration-500">
      <div className="grid grid-rows-[auto_1fr] place-items-center gap-5
      "> 
        <button
          onClick={handleTheme}
          className="w-[75px] absolute top-12 animate-fade-in font-bold text-black rounded-full
           bg-gray-600/30 px-5 py-1 dark:bg-white/30 dark:text-white transition duration-500
           md:right-[22rem] md:top-16 hover:bg-gray-700/50 max-"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
        <div className="lg:absolute md:top-16 md:left-[22rem]"><WeatherSearch setWeather={setWeather} /></div>
        
      </div>
      <h1 className="drop-shadow-2xl text-xl font-semibold dark:text-white animate-fade-in duration-500 transition">
        {weather.name}, {weather.sys.country}
      </h1>

      <div className="grid gap-2.5 md:grid-cols-[1fr_auto]">
        <article
          className="bg-white/30 rounded-3xl drop-shadow-xl animate-fade-in
            grid grid-cols-[1fr_auto] items-center py-6 px-8 dark:bg-gray-700/30 duration-500 transition-colors"
        >
          <h4 className="col-span-2 text-lg capitalize animate-fade-in dark:text-white duration-500 transition-colors">
            {" "}
            {weather.weather[0].description}{" "}
          </h4>
          <span className="text-[6rem] font-extralight text-black animate-fade-in dark:text-white duration-500 transition-colors">
            {converteTemp(weather.main.temp)}
          </span>
          <picture className="w-28 ">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
              className="animate-fade-in"
            />
          </picture>
        </article>

        <article
          className="animate-fade-in bg-white/30 rounded-3xl grid drop-shadow-xl
                            grid-cols-3 justify-items-center px-6 py-6
                            md:grid-cols-1 md:p-2 dark:bg-gray-700/30 duration-500 transition-colors"
        >
          <StatWeather
            icon="/vientoB.png"
            unit="m/s"
            value={weather.wind.speed}
          />
          <StatWeather
            icon="/humedadB.png"
            unit="%"
            value={weather.main.humidity}
          />
          <StatWeather
            icon="/presionB.png"
            unit="hPa"
            value={weather.main.pressure}
          />
        </article>
      </div>
      <div className="justify-center m-5">
        <button
          onClick={handleConverteTemp}
          className="animate-fade-in drop-shadow-xl bg-white text-blue-500 w-36 rounded-full py-1.5 duration-500 dark:text-white transition-colors dark:bg-blue-500"
        >
          {isCelsius ? "Change to °F" : "Change to °C"}
        </button>
      </div>
    </section>
  );
}  
export default WeatherCont