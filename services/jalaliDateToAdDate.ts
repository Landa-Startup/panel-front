import moment from "jalali-moment";

export default function jalaliDateToAdDate(jalaliDateTime:string) {
  let date = moment.from(jalaliDateTime, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
  
  return date;
}
