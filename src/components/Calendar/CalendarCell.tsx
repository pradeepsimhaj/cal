interface CellProps {
  day: number | null;
  selectedDay: number;
}

export default function CalendarCell({ day, selectedDay }: CellProps) {
  const isSelected = day === selectedDay;

  return (
    <div
  role="gridcell"
  className={`cal-cell ${isSelected ? "selected" : ""}`}
>
  {day || ""}
</div>

  );
}
