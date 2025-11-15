export function getMonthName(date: Date): string {
  return date.toLocaleString("en-US", { month: "long" });
}

export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay(); // 0=Sun
}

// Builds a matrix for weeks × days
export function generateCalendarMatrix(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const matrix: (number | null)[][] = [];
  let currentDay = 1;

  for (let row = 0; row < 6; row++) {
    const week: (number | null)[] = [];

    for (let col = 0; col < 7; col++) {
      if (row === 0 && col < firstDay) {
        week.push(null);
      } else if (currentDay > daysInMonth) {
        week.push(null);
      } else {
        week.push(currentDay);
        currentDay++;
      }
    }

    matrix.push(week);
  }

  return matrix;
}
