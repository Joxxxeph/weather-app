import axios from "axios";
import {BiSearchAlt} from "react-icons/bi"

const WeatherSearch = ({setWeather}) => {

    const handleSearch = (e) => {
        e.preventDefault()
        
        const city = e.target.city.value;
        const API_KEY = "00f95e83f7825fab23788b4593239bc5";

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
                )
            .then(({data}) => setWeather(data))
            .catch((error) => console.log(error))
        document.querySelector(".search").reset()
    }
    
  return (
    <form action="" onSubmit={handleSearch} className="search animate-fade-in rounded-2xl overflow-hidden
        flex">
        <input type="text" name="city" className="outline-none px-4 py-1 bg-white/30
        drop-shadow-2xl dark:bg-gray-700/50 dark:text-white dark:focus:bg-gray-700/90 focus:bg-white/70
        transition duration-500 md:px-6" />

        <button className="bg-gray-600/30 hover:bg-gray-700/50 w-8 pl-[0.30rem] transition duration-500 dark:bg-white/50"><BiSearchAlt style={{fontSize: '20px'}}></BiSearchAlt></button>
        
    </form>
  )
}
export default WeatherSearch