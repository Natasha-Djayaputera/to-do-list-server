import { Query } from "../dto/query";

export type SortByParameter = "id" | "task" | "isDone" | "dueDate";
export type OrderByParameter = "ASC" | "DESC";
export type SortParameter = [SortByParameter, OrderByParameter];

function isSortByParameter(candidate: string): candidate is SortByParameter {
  return (
    candidate === "id" ||
    candidate === "task" ||
    candidate === "isDone" ||
    candidate === "dueDate"
  );
}

function isOrderByParameter(candidate: string): candidate is OrderByParameter {
  return candidate === "ASC" || candidate === "DESC";
}

const DEFAULT_SORT: SortParameter[] = [["id", "ASC"]];

export default function sortQueryHelper(candidate: Query): SortParameter[] {
  if (candidate === undefined) return DEFAULT_SORT;

  const sortQuery = Array.isArray(candidate) ? candidate : [candidate];
  const sort: SortParameter[] = sortQuery
    .map((value) => {
      if (typeof value === "string" && value.includes(",")) {
        const split = value.split(",");

        if (isSortByParameter(split[0]) && isOrderByParameter(split[1])) {
          return split;
        } else return undefined;
      }
    })
    .filter((t): t is SortParameter => t !== undefined);

  if (sort.length === 0) return DEFAULT_SORT;
  else return sort;
}
