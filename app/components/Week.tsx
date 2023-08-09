interface DayForecast {
    date: string;
    day: {
        condition: {
            icon: string;
            text: string;
        }
        maxtemp_c: number;
        mintemp_c: number;
    }
}

interface WeekForecastProps {
    data: {
        forecast: {
            forecastday: DayForecast[];
        }
    }
}

const Week = ({ data }: WeekForecastProps) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full">
            {data.forecast.forecastday.map((day, index) => (
                <div key={index} className="flex flex-col items-center bg-gradient-to-b from-white/40 to-black/10 p-2 text-center text-white rounded-lg">
                    <p className="font-semibold">{new Date(day.date).toLocaleString("en-US", { weekday: "short" })}, {new Date(day.date).toLocaleDateString('en-US', {month: "short", day: "numeric"})}</p>
                    <img src={day.day.condition.icon} alt={day.day.condition.text} className="w-24" />
                    <div className="font-medium">
                        <p>H {day.day.maxtemp_c.toFixed()} °C</p>
                        <p>L {day.day.mintemp_c.toFixed()} °C</p>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Week;