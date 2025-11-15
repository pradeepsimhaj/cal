import { render, screen } from "@testing-library/react";
import CalendarGrid from "../Calendar/CalendarGrid";

describe("CalendarGrid – Advanced Tests", () => {
  const matrix = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
  ];

  test("renders the correct number of weekday headers", () => {
    render(<CalendarGrid matrix={matrix} selectedDay={3} />);
    const weekdays = screen.getAllByText(/Sun|Mon|Tue|Wed|Thu|Fri|Sat/);
    expect(weekdays.length).toBe(7);
  });

  test("renders the correct number of date cells", () => {
    render(<CalendarGrid matrix={matrix} selectedDay={3} />);
    const dateCells = screen.getAllByRole("gridcell");
    expect(dateCells.length).toBe(14);
  });

  test("selected date is highlighted", () => {
    render(<CalendarGrid matrix={matrix} selectedDay={3} />);
    const cell = screen.getByText("3");
    expect(cell).toHaveClass("selected");
  });
});
