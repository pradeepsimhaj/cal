import { render, screen } from "@testing-library/react";
import CalendarHeader from "../Calendar/CalendarHeader";

describe("CalendarHeader – Tests", () => {
  test("renders month and year correctly", () => {
    render(<CalendarHeader date={new Date(2022, 9, 3)} />);
    expect(screen.getByText("October 2022")).toBeInTheDocument();
  });

  test("changes output when date changes", () => {
    render(<CalendarHeader date={new Date(2020, 2, 15)} />);
    expect(screen.getByText("March 2020")).toBeInTheDocument();
  });
});
