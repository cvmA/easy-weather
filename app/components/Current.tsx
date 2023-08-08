import { getCurrentDate } from "../utils/currentDate";

const Current = ({ data }) => {
    const currentDate = getCurrentDate()
    const weatherIcon = data.current.condition.icon
    return (
        <div>{currentDate} {weatherIcon &&(
            <img src={weatherIcon} alt={data.current.condition.text} />
        )}</div>
     );
}
 
export default Current;