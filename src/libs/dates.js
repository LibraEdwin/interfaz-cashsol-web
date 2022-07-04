import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/es-mx';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('es-mx');

export function getDate (date, format = 'DD/MM/YYYY') {
  return dayjs(date).format(format);
}

export function getHour (date, format = 'h:mm A') {
  return dayjs(date).format(format);
}
