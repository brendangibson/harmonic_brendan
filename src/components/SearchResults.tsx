import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from "grommet";
import { t } from "../hooks/i18n/i18n";
import { Results } from "../types/search";
import CompanyResult from "./CompanyResult";

interface Props {
  results: Results;
}

/**
 * Shows a list of all the company search results
 */
const SearchResults = ({ results }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            <Text>{t("nameHeader")}</Text>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <Text>{t("descriptionHeader")}</Text>
          </TableCell>
          <TableCell scope="col" border="bottom">
            <Text>{t("highlightsHeader")}</Text>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.length ? (
          results.map((result) => (
            <CompanyResult company={result} key={result.id} />
          ))
        ) : (
          <Text>{t("noResults")}</Text>
        )}
      </TableBody>
    </Table>
  );
};

export default SearchResults;
