import moment from 'jalali-moment';

export default function AdDateToJalaliDate(date:string) {
  const gregorianDate = date;

  const jalaliDate = moment(gregorianDate)
    .locale('fa')
    .format('jYYYY/jMM/jDD HH:mm:ss');

//   const humanized = moment(gregorianDate).locale('fa').fromNow();

  return jalaliDate;
}
