export default function convertDate(date: string){
  const [year, month, day] = date.split('-').map(String);

  const correctDate = `${day}/${month}/${year}`;

  return correctDate;
}