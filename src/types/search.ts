import { Company } from "./company";

// Types for a company

export type Results = Company[];

export enum Field {
  COMPANY,
}

export enum Operation {
  CONTAINS,
  DOES_NOT_CONTAIN,
  IS_EXACTLY,
  IS_EMPTY,
  IS_NOT_EMPTY,
}

export enum Combination {
  FIRST,
  AND,
  OR,
}

export interface QueryClause {
  id: string;
  field: Field;
  operation: Operation;
  operand?: string;
  combination: Combination;
}

export type Query = QueryClause[];

export const DEFAULT_FIELD = Field.COMPANY;
export const DEFAULT_OPERATION = Operation.CONTAINS;
