import { getMonthName } from "./calendarUtils";

interface HeaderProps {
  date: Date;
}

export default function CalendarHeader({ date }: HeaderProps) {
  return (
    <div className="cal-header">
      <h2>{`${getMonthName(date)} ${date.getFullYear()}`}</h2>
    </div>
  );
}
