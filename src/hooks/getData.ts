import { useEffect, useState } from "react";
import { Results } from "../types/search";

const MOCK_URL =
  window.location.origin + window.location.pathname + "/mock.json";

// Loading states when fetching the data
export type Status = "idle" | "loading" | "complete" | "error";

interface UseReadDataResponse {
  status: Status;
  results?: Results;
}

/**
 * Generic hook to read the data from a JSON file on a URL
 */
const useReadData: (url: string) => UseReadDataResponse = (url) => {
  const [status, setStatus] = useState<Status>("idle");
  const [results, setResults] = useState<Results>();

  useEffect(() => {
    const fetchData = async () => {
      setStatus("loading");
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResults(data);
        setStatus("complete");
      } catch (e) {
        console.error(e);
        setStatus("error");
      }
    };

    fetchData();
  }, [url]);

  return { status, results };
};

// Get all of the companies data.
// This application will store all of the data in memory after it is fetched
// and will manipulate the results on the client side
// For speed, mostly.
export const useGetData = () => {
  return useReadData(MOCK_URL);
};
