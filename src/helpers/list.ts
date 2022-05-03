import { Query } from '../dto/query';

export default function getListName(list: Query): string | null {
  if (typeof list !== 'string' || list === '') return null;
  else return list;
}
