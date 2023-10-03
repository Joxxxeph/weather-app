const StatWeather = ({ icon, value, unit }) => {
  return (
    <div className="flex gap-1 items-center">
        <img className="fill-white" src={icon} alt="" />
        <span className="dark:text-white duration-500 transition-colors">{value} {unit}</span>
    </div>
  )
}
export default StatWeather