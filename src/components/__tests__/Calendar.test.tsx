import { render, screen } from "@testing-library/react";
import Calendar from "../Calendar/Calendar";
import "@testing-library/jest-dom";

describe("Calendar Component – Advanced Tests", () => {
  test("renders exactly 7 weekday headers", () => {
    render(<Calendar date={new Date(2023, 4, 10)} />);
    const headers = screen.getAllByText(/Sun|Mon|Tue|Wed|Thu|Fri|Sat/);
    expect(headers.length).toBe(7);
  });

  test("renders the correct number of total cells (always 42)", () => {
    render(<Calendar date={new Date(2023, 4, 10)} />);
    const cells = screen.getAllByRole("gridcell");
    expect(cells.length).toBe(42); // 6 weeks × 7 days
  });

  test("selected date is highlighted correctly", () => {
    render(<Calendar date={new Date(2023, 4, 10)} />);
    const highlighted = screen.getByText("10");
    expect(highlighted).toHaveClass("selected");
  });

  test("dates align correctly for May 2023 (starts on Monday)", () => {
    render(<Calendar date={new Date(2023, 4, 1)} />);

    // Get all grid cells
    const cells = screen.getAllByRole("gridcell");
    const firstRow = cells.slice(0, 7);
    const emptyCells = firstRow.filter((cell) => cell.textContent === "");
    expect(emptyCells.length).toBe(1);
  });
});
