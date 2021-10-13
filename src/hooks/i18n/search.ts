import { Query, Results } from "../../types/search";

// Hook to to save the current query
// TODO: implement this. Will just write to the console for now
export const useSaveQuery = () => {
  return (query: Query) => {
    console.log("Saved query:", JSON.stringify(query));
    return true;
  };
};

// Hook to run a search
// TODO: implement all the logic on the results, in memory

export const useSearch = () => {
  return (query: Query, results?: Results) => {
    // Just return random results for now
    return results?.filter((_) => Math.random() > 0.5);
  };
};
