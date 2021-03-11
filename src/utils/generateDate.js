export function convertToHourMinutes(date) {
  const newDate = new Date(date);
  const minutes = newDate.getMinutes();
  return `${newDate.getHours()}:${minutes < 10 ? '0'+minutes : minutes}`;
}