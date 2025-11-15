import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import { generateCalendarMatrix } from "./calendarUtils";
import "./Calendar.css";

interface CalendarProps {
  date: Date;
}

export default function Calendar({ date }: CalendarProps) {
  const matrix = generateCalendarMatrix(date);
  const selectedDay = date.getDate();

  return (
    <div className="calendar-container">
      <CalendarHeader date={date} />
      <CalendarGrid matrix={matrix} selectedDay={selectedDay} />
    </div>
  );
}
