import { getCurrentDate } from "../utils/currentDate";
import { MapPin } from "@phosphor-icons/react";

interface CurrentProps {
    data: {
        current: {
            condition: {
                icon: string;
                text: string;
            }
            temp_c: number;
        }
        location: {
            name: string;
            region: string;
        }
    }
}

const Current = ({ data }: CurrentProps) => {
    const currentDate = getCurrentDate()
    const weatherIcon = data.current.condition.icon
    return (
        <div className="bg-gradient-to-b from-black/50 to-black/20 rounded-md p-3 md:p-6 flex flex-col mb-7 items-center gap-2 w-full sm:w-2/4 lg:w-1/4">
            <div>
                <div className="bg-white/60 px-4 py-2 rounded-md flex items-center justify-center text-black font-medium">
                    <MapPin size={18} weight="bold" />
                    <span>
                        {data.location.name}, {data.location.region}
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="text-white">
                    <h1 className="text-3xl font-medium">Today</h1>
                    <p>{currentDate}</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                {weatherIcon && (
                    <div>
                        <img src={weatherIcon} alt={data.current.condition.text} />
                    </div>
                )}
                <div className="text-5xl text-white font-semibold">
                    <p>{data.current.temp_c.toFixed()}
                        <span> °C</span>
                    </p>
                </div>
            </div>
            <p className="text-md font-medium text-white">{data.current.condition.text}</p>
        </div>
    );
}

export default Current;