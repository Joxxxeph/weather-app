const StatWeather = ({ icon, value, unit }) => {
  return (
    <div className="flex gap-1 items-center animate-fade-in">
        <img className="fill-white animate-fade-in" src={icon} alt="" />
        <span className="animate-fade-in dark:text-white duration-500 transition-colors">{value} {unit}</span>
    </div>
  )
}
export default StatWeather