import { render } from "@testing-library/react";
import Calendar from "../Calendar/Calendar";

describe("Calendar Snapshot Tests", () => {
  test("matches snapshot for October 2022", () => {
    const { container } = render(<Calendar date={new Date(2022, 9, 3)} />);
    expect(container).toMatchSnapshot();
  });
});
