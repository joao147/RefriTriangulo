export default function getDateToString(date: Date){
  const dateToString = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}, ${date.getUTCHours()}:${date.getUTCMinutes()}`
  return (dateToString);
}