export default function getHourToString(date: Date){
  var dateToString
  if(date.getMinutes() > 9){
    dateToString = `${date.getHours()}:${date.getMinutes()}`
  }else{
    dateToString = `${date.getHours()}:0${date.getMinutes()}`
  }
  return (dateToString);
}