
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCont from './components/WeatherCont'

function App() {
    const [weather, setWeather] = useState(null)
    

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
        navigator.geolocation.getCurrentPosition(success)

    }, [])

    const weatherFonts = {
      "800": "/clearSky.jpg",
      "801": "/fewClouds.jpg",
      "802": "/scatteredClouds.jpg",
      "803": "/brokenClouds.jpg",
      "804": "/overcastClouds.jpg",

      "600": "/snow.jpg",
      "601": "/snow.jpg",
      "602": "/snow.jpg",
      "616": "/snow.jpg",
      "611": "/snow.jpg",
      "612": "/snow.jpg",
      "613": "/snow.jpg",
      "615": "/snow.jpg",
      "620": "/snow.jpg",
      "622": "/snow.jpg",
      "621": "/snow.jpg",
      
      "200": "/thunderstorm.jpg",
      "201": "/thunderstorm.jpg",
      "202": "/thunderstorm.jpg",
      "210": "/thunderstorm.jpg",
      "211": "/thunderstorm.jpg",
      "212": "/thunderstorm.jpg",
      "230": "/thunderstorm.jpg",
      "231": "/thunderstorm.jpg",
      "232": "/thunderstorm.jpg",
      "221": "/thunderstorm.jpg",
      
      "311": "/rain.jpg",
      "300": "/rain.jpg",
      "302": "/rain.jpg",
      "310": "/rain.jpg",
      "312": "/rain.jpg",
      "313": "/rain.jpg",
      "314": "/rain.jpg",
      "321": "/rain.jpg",
      
      "521": "/showerRain.jpg",
      "500": "/rain.jpg",
      "501": "/rain.jpg",
      "502": "/rain.jpg",
      "503": "/showerRain.jpg",
      "504": "/showerRain.jpg",
      "520": "/showerRain.jpg",
      "511": "/showerRain.jpg",
      "531": "/showerRain.jpg",
      "522": "/showerRain.jpg",

      "701": "/overcastClouds.jpg",
      "711": "/overcastClouds.jpg",
      "721": "/overcastClouds.jpg",
      "731": "/overcastClouds.jpg",
      "741": "/vientosFuertes.jpg",

      "751": "/vientosFuertes.jpg",
      "761": "/vientosFuertes.jpg",
      "762": "/vientosFuertes.jpg",
      "771": "/vientosFuertes.jpg",
      "781": "/vientosFuertes.jpg",


    }

   
    

  return (
                 
    <div>
      {weather === null ? (
        <div className='min-h-screen min-w-full bg-gray-700 flex flex-col justify-center items-center'>
          <img src="/Vector.png" alt="" className='animate-fade-in' />
          <h2 className='text-white text-3xl p-4 animate-fade-in'>Weather App</h2>
        </div>
        ) : (
          <main
          className='font-["Lato"] flex px-4 justify-center items-center min-h-screen text-black'
          >
            
            
             
          
          <img src={weatherFonts[weather.weather[0].id]} className='bg-cover object-cover bg-center min-w-full min-h-[125%] absolute dark:brightness-50 duration-500 transition' alt="" />
            <WeatherCont weather={weather} setWeather={setWeather}/>         
            </main>
      )}
      </div>
  );
}

export default App
