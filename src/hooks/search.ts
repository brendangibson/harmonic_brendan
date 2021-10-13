import { fieldMap } from "../setup/clause";
import {
  Combination,
  Operation,
  Query,
  QueryClause,
  Results,
} from "../types/search";

// Hook to to save the current query
// TODO: implement this. Will just write to the console for now
export const useSaveQuery = () => {
  return (query: Query) => {
    console.log("Saved query:", JSON.stringify(query));
    return true;
  };
};

// "AND" of two lists
export const combine = (a: Results, b: Results): Results => {
  const bIds = new Set();
  b.forEach((result) => bIds.add(result.id));
  return [...a.filter((result) => !bIds.has(result.id)), ...b];
};

// "OR" of two lists
export const intersect = (a: Results, b: Results): Results => {
  const bIds = new Set();
  b.forEach((result) => bIds.add(result.id));
  return [...a.filter((result) => bIds.has(result.id))];
};

// Hook to run a search
export const useSearch = () => {
  return (query: Query, results?: Results): Results | undefined => {
    return runQueryOverResults(query, results);
  };
};

// Runs a single clause over the results to return a filtered lists of results that match
const runClauseOverResults = (
  clause: QueryClause,
  results?: Results
): Results | undefined => {
  const fieldName = fieldMap[clause.field];
  switch (clause.operation) {
    case Operation.CONTAINS:
      return results?.filter(
        (result) =>
          clause.operand &&
          (result[fieldName] as string)
            ?.toLowerCase()
            .indexOf(clause.operand?.toLowerCase()) > -1
      );
    case Operation.DOES_NOT_CONTAIN:
      return results?.filter(
        (result) =>
          clause.operand &&
          (result[fieldName] as string)
            ?.toLowerCase()
            .indexOf(clause.operand?.toLowerCase()) === -1
      );
    case Operation.IS_EXACTLY:
      return results?.filter(
        (result) =>
          (result[fieldName] as string)?.toLowerCase() ===
          clause.operand?.toLowerCase()
      );
    case Operation.IS_EMPTY:
      return results?.filter((result) => !result[fieldName]);
    case Operation.IS_NOT_EMPTY:
      return results?.filter((result) => Boolean(result[fieldName]));
  }
};

// Runs each clause and then combines the results
const runQueryOverResults = (query: Query, results?: Results): Results | [] => {
  const filteredResults = query.map((clause) =>
    runClauseOverResults(clause, results)
  );
  //combine here
  let accum = filteredResults[0] ?? [];

  for (let i = 1; i < filteredResults.length; i++) {
    const combination = query[i].combination;
    if (combination === Combination.OR) {
      accum = combine(accum, filteredResults[i] ?? []);
    } else {
      accum = intersect(accum, filteredResults[i] ?? []);
    }
  }

  return accum;
};
