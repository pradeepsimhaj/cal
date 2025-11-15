import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Calendar from "../Calendar/Calendar"

describe("Calendar Component", () => {
  test("renders month and year correctly", () => {
    render(<Calendar date={new Date(2022, 9, 20)} />); // Oct 3, 2022
    expect(screen.getByText("October 2022")).toBeInTheDocument();
  });

  test("renders days of the week", () => {
    render(<Calendar date={new Date()} />);
    expect(screen.getByText("Sun")).toBeInTheDocument();
    expect(screen.getByText("Mon")).toBeInTheDocument();
  });

  test("highlights the selected date", () => {
    render(<Calendar date={new Date(2022, 9, 3)} />);
    const cell = screen.getByText("3");
    expect(cell).toHaveClass("selected");
  });
});
