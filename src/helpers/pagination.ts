import { Query } from '../dto/query';

export interface Pagination {
  offset: number;
  limit?: number;
}

export default function setPagination(
  currentPage: Query,
  currentSize: Query
): Pagination {
  let page = 1;
  let size = undefined;

  if (
    (typeof currentPage === 'number' || typeof currentPage === 'string') &&
    Number(currentPage) >= 1
  ) {
    page = Number(currentPage);
  }

  if (
    (typeof currentSize === 'number' || typeof currentSize === 'string') &&
    Number(currentSize) > 0
  ) {
    size = Number(currentSize);
  }

  let offset = 0;
  let limit = undefined;

  if (size !== undefined) {
    offset = (page - 1) * size;
    limit = size;
  }

  return { offset, limit };
}
