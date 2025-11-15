interface CellProps {
  day: number | null;
  selectedDay: number;
}

export default function CalendarCell({ day, selectedDay }: CellProps) {
  const isSelected = day === selectedDay;

  return (
    <div className={`cal-cell ${isSelected ? "selected" : ""}`}>
      {day}
    </div>
  );
}
