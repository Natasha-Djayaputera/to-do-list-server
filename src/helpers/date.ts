import moment from 'moment';
import { Query } from '../dto/query';

export default function getDate(dateQuery: Query): Date | null {
  if (Array.isArray(dateQuery)) return null;
  const date = moment(`${dateQuery}`, ['YYYY-MM-DD', 'YYYY-M-D'], true);
  const validDate = date.isValid()
    ? moment(moment(date).format('YYYY-MM-DD')).toDate()
    : null;

  return validDate;
}
