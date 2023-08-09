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
        <div className=" bg-black/40 rounded-md p-3 flex flex-col mb-8 md:mb-0 items-center gap-2 w-3/4">
            <div>
                <div className="bg-white/60 p-2 rounded-md flex items-center justify-center text-black ">
                    <MapPin size={20} />
                    <span>
                        {data.location.name}, {data.location.region}
                    </span>
                </div>
            </div>
            <div className="flex items-center">
                <div className="text-white">
                    <h1 className="text-3xl">Today</h1>
                    <p>{currentDate}</p>
                </div>
            </div>
            <div className="flex flex-row items-center">
                {weatherIcon && (
                    <div>
                        <img src={weatherIcon} alt={data.current.condition.text} />
                    </div>
                )}
                <div className="text-5xl text-white font-medium">
                    <p>{data.current.temp_c.toFixed()}
                        <span>°</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Current;