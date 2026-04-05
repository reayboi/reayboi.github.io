import './timestamp.css';
import { getDay, getDayOfWeek, getMonth, getTime } from "../../utils/dates";

interface TimestampProps {
    date: Date;
}

export const Timestamp = ({date} : TimestampProps) => {
    const timestamp = `${getDayOfWeek(date)} ${getDay(date)} ${getMonth(date)} @ ${getTime(date)}`
    return <span className='timestamp'>~  {timestamp}</span>
}