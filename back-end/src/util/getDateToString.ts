export default function getDateToString(date: Date){
  var dateToString
  if(date.getMinutes() > 9){
    dateToString = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}, ${date.getHours()}:${date.getMinutes()}`
  }else{
    dateToString = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getUTCFullYear()}, ${date.getHours()}:0${date.getMinutes()}`
  }
  return (dateToString);
}