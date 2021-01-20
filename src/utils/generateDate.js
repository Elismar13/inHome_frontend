export function convertToHourMinutes(date) {
  const newDate = new Date(date);
  return `${newDate.getHours()}:${newDate.getSeconds()}`;
}