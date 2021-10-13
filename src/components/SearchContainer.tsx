import SearchResults from "./SearchResults";
import SearchBox from "./SearchBox";
import { useGetData } from "../hooks/getData";
import { Text, Notification, Spinner } from "grommet";
import { Query } from "../types/search";
import { useEffect, useState } from "react";
import { useSaveQuery, useSearch } from "../hooks/i18n/search";
import { t } from "../hooks/i18n/i18n";

/**
 * Container for the search box and search results. Stores the results state.
 */
const SearchContainer = () => {
  const { status, results } = useGetData();
  const [searchResults, setSearchResults] = useState(results);
  const [showSaveNotification, setShowSaveNotification] = useState(false);
  const [open, setOpen] = useState(false);

  const saveQuery = useSaveQuery();
  const search = useSearch();

  // Set the initial search results to all of the results when they arrive
  useEffect(() => {
    setSearchResults(results);
  }, [results]);

  const handleSaveClick = (query: Query) => {
    saveQuery(query);
    setOpen(false);
    setShowSaveNotification(true);
  };

  const handleSearchClick = (query: Query) => {
    setOpen(false);
    const newSearchResults = search(query, results);
    setSearchResults(newSearchResults);
  };

  if (status === "error") {
    return <Text color="status-error">{t("error")}</Text>;
  }

  if (status === "loading") {
    return <Spinner />;
  }

  return (
    <>
      <SearchBox
        onSaveClick={handleSaveClick}
        onSearchClick={handleSearchClick}
        open={open}
        setOpen={setOpen}
      />
      {searchResults && <SearchResults results={searchResults} />}
      {showSaveNotification && (
        <Notification
          toast
          title={t("saveNotificationTitle")}
          message={t("saveNotificationMsg")}
          onClose={() => setShowSaveNotification(false)}
        />
      )}
    </>
  );
};

export default SearchContainer;
