import { ArrowDown, ArrowUp, ArrowsInLineVertical, Drop, Thermometer, Wind } from "@phosphor-icons/react";

const Details = ({ data }) => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full mb-7">
                <div className="text-white bg-gradient-to-b from-black/60 to-black/30 p-2 text-center rounded-lg">
                    <div className="flex flex-row items-center center justify-center gap-1">
                        <ArrowDown size={18} weight="bold"/>
                        <h3>Min</h3>
                    </div>
                    <p className="font-semibold text-xl">{data.forecast.forecastday[0].day.mintemp_c} °C</p>
                </div>

                <div className="text-white bg-gradient-to-b from-black/60 to-black/30 p-2 text-center rounded-lg">
                    <div className="flex flex-row items-center justify-center gap-1">
                        <ArrowUp size={18} weight="bold"/>
                        <h3>Max</h3>
                    </div>
                    <p className="font-semibold text-xl">{data.forecast.forecastday[0].day.maxtemp_c} °C</p>
                </div>

                <div className="text-white bg-gradient-to-b from-black/60 to-black/30 p-2 text-center rounded-lg">
                    <div className="flex flex-row items-center justify-center gap-1">
                        <Thermometer size={18} weight="bold" />
                        <h3>Feels like</h3>
                    </div>
                    <p className="font-semibold text-xl">{data.current.feelslike_c} °C</p>
                </div>

                <div className="text-white bg-gradient-to-b from-black/60 to-black/30 p-2 text-center rounded-lg">
                    <div className="flex flex-row items-center justify-center gap-1">
                        <ArrowsInLineVertical size={20} weight="bold" />
                        <h3>Pressure</h3>
                    </div>
                    <p className="font-semibold text-xl">{data.current.pressure_mb} hPa</p>
                </div>

                <div className="text-white bg-gradient-to-b from-black/60 to-black/30 p-2 text-center rounded-lg">
                    <div className="flex flex-row items-center justify-center gap-1">
                        <Drop size={18} weight="bold" />
                        <h3>Humidity</h3>
                    </div>
                    <p className="font-semibold text-xl">{data.current.humidity}%</p>
                </div>

                <div className="text-white bg-gradient-to-b from-black/60 to-black/30 p-2 text-center rounded-lg">
                    <div className="flex flex-row items-center justify-center gap-1">
                        <Wind size={18} weight="bold" />
                        <h3>Wind Speed</h3>
                    </div>
                    <p className="font-semibold text-xl">{data.current.wind_kph} km/h</p>
                </div>

            </div>
        </>
    );
}

export default Details;