import moment from 'jalali-moment';

export default function jalaliDateToAdDate(jalaliDateTime:string) {
  console.log(jalaliDateTime);
  const formatedDate =moment(jalaliDateTime, 'jalali').format('YYYY-MM-DDHH:mm:ss');
  console.log(jalaliDateTime);
  return formatedDate;
}
