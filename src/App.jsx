
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCont from './components/WeatherCont'

function App() {
    const [weather, setWeather] = useState(null)
    const [theme, setTheme] = useState('light')

    const success = (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const API_KEY = "00f95e83f7825fab23788b4593239bc5";

        
        
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            )
            .then(({data}) => setWeather(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
      if (theme === "darck") {
        document.querySelector("html").classList.add("dark")
      } else {
        document.querySelector("html").classList.remove("dark")

      }
    }, [theme])
    

    const handleTheme = () => {
      setTheme(prevTheme => prevTheme === "light" ? "darck" : "light")
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success)

    }, [])

    const weatherFonts = {
      "800": "/clearSky.jfif",
      "803": "/brokenClouds.jfif",
      "801": "/fewClouds.jfif",
      "804": "/overcastClouds.jfif",
      "802": "/scatteredClouds.jfif",
      "521": "/showerRain.jfif",
      "500": "/rain.jfif",
      "311": "/rain.jfif",
      "600": "/snow.jfif",
      "601": "/snow.jfif",
      "602": "/snow.jfif",
      "616": "/snow.jfif",
      "201": "/thunderstorm.jfif",
      "211": "/thunderstorm.jfif",
      "701": "/vientosFuertes.jfif",

    }

   
    

  return (
                 
    <div>
      {weather === null ? (
        <div className='min-h-screen min-w-full bg-gray-700 flex flex-col justify-center items-center'>
          <img src="/Vector.png" alt="" />
          <h2 className='text-white text-3xl p-4'>Weather App</h2>
        </div>
        ) : (
          <main
          className='font-["Lato"] flex px-4 justify-center items-center min-h-screen text-black'
          >
            
            <button onClick={handleTheme} className='z-10 absolute top-20 font-bold text-black rounded-full bg-gray-500/30 px-5 py-1 dark:bg-white/30 dark:text-white transition duration-500'>
            {theme === "light" ? "Dark" : "Light"}
            </button>
             
          
          <img src={weatherFonts[weather.weather[0].id]} className='bg-cover object-cover bg-center min-w-full min-h-[125%] absolute dark:brightness-50 duration-500 transition' alt="" />
            <WeatherCont weather={weather} />         
            </main>
      )}
      </div>
  );
}

export default App
