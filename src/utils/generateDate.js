export function convertToHourMinutes(date) {
  const newDate = new Date(date).toLocaleString('pt-br');
  return `${newDate.getHours()}:${newDate.getSeconds()}`;
}