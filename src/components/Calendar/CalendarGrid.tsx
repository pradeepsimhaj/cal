import CalendarCell from "./CalendarCell";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface GridProps {
  matrix: (number | null)[][];
  selectedDay: number;
}

export default function CalendarGrid({ matrix, selectedDay }: GridProps) {
  return (
    <div className="cal-grid">
      {/* Days of week header */}
      {daysOfWeek.map((day) => (
        <div key={day} className="cal-day-header">
          {day}
        </div>
      ))}

      {/* Date cells */}
      {matrix.map((week, rowIndex) =>
        week.map((day, colIndex) => (
          <CalendarCell
            key={`${rowIndex}-${colIndex}`}
            day={day}
            selectedDay={selectedDay}
          />
        ))
      )}
    </div>
  );
}
