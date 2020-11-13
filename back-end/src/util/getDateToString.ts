export default function getDateToString(date: Date){
  var dateToString
  dateToString = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}`
  return (dateToString);
}