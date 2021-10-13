import { Card, CardBody, CardHeader } from "grommet";
import { useState, Dispatch, SetStateAction } from "react";
import {
  Combination,
  DEFAULT_FIELD,
  DEFAULT_OPERATION,
  Query,
} from "../types/search";
import ButtonBar from "./ButtonBar";
import Clauses from "./Clauses";
import SearchHeader from "./SearchHeader";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onSaveClick: (query: Query) => void;
  onSearchClick: (query: Query) => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Box that contains the search query builder
 */
const SearchBox = ({ onSaveClick, onSearchClick, open, setOpen }: Props) => {
  const [query, setQuery] = useState<Query>([
    {
      id: uuidv4(),
      field: DEFAULT_FIELD,
      combination: Combination.FIRST,
      operation: DEFAULT_OPERATION,
    },
  ]);

  // Toggle the search box through clicking on the header
  const handleClick = () => setOpen((value) => !value);

  const handleAddNewOr = () => {
    setQuery((oldQuery) => [
      ...oldQuery,
      {
        id: uuidv4(),
        field: DEFAULT_FIELD,
        operation: DEFAULT_OPERATION,
        combination: Combination.OR,
      },
    ]);
  };

  const handleAddNewAnd = () => {
    setQuery((oldQuery) => [
      ...oldQuery,
      {
        id: uuidv4(),
        field: DEFAULT_FIELD,
        operation: DEFAULT_OPERATION,
        combination: Combination.AND,
      },
    ]);
  };

  const handleQueryChange = (newQuery: Query) => {
    setQuery(newQuery);
  };

  const handleDelete = (id: string) => {
    setQuery((oldQuery) => oldQuery.filter((clause) => clause.id !== id));
  };

  return (
    <Card width="full" background="light-1">
      <CardHeader pad="medium" border="bottom">
        <SearchHeader onClick={handleClick} />
      </CardHeader>
      {open && (
        <CardBody animation="slideDown" pad="medium" background="light-1">
          <Clauses
            query={query}
            onAddNewAnd={handleAddNewAnd}
            onAddNewOr={handleAddNewOr}
            onDelete={handleDelete}
            onChange={handleQueryChange}
          />
          <ButtonBar
            onSaveClick={() => onSaveClick(query)}
            onSearchClick={() => onSearchClick(query)}
          />
        </CardBody>
      )}
    </Card>
  );
};

export default SearchBox;
