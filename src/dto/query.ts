import { ParsedQs } from "qs";

export type Query =
  | string
  | string[]
  | ParsedQs
  | ParsedQs[]
  | undefined
  | null;
