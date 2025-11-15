import {
  getMonthName,
  getDaysInMonth,
  getFirstDayOfMonth,
  generateCalendarMatrix,
} from "../Calendar/calendarUtils";

describe("Calendar Utils – Advanced Tests", () => {
  test("getMonthName returns correct month", () => {
    expect(getMonthName(new Date(2023, 4, 10))).toBe("May");
  });

  test("getDaysInMonth returns correct day count for leap year Feb 2024", () => {
    expect(getDaysInMonth(2024, 1)).toBe(29);
  });

  test("getFirstDayOfMonth returns correct weekday", () => {
    expect(getFirstDayOfMonth(2023, 4)).toBe(1); // May 1 2023 → Monday
  });

  test("calendar matrix always returns exactly 6 rows", () => {
    const matrix = generateCalendarMatrix(new Date(2023, 4, 10));
    expect(matrix.length).toBe(6);
  });

  test("calendar matrix has exactly 42 cells", () => {
    const matrix = generateCalendarMatrix(new Date(2023, 4, 10));
    const flat = matrix.flat();
    expect(flat.length).toBe(42);
  });

  test("matrix places 1st on correct weekday", () => {
    const matrix = generateCalendarMatrix(new Date(2023, 4, 10));
    expect(matrix[0][1]).toBe(1); // index 1 = Monday
  });
});
