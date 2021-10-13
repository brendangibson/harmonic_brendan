import { TableCell, TableRow, Text } from "grommet";
import { Company } from "../types/company";
import Pill from "./Pill";

interface Props {
  company: Company;
}

/**
 * Shows a company's information as part of a search result
 */
const CompanyResult = ({ company }: Props) => {
  return (
    <TableRow>
      <TableCell scope="row">
        <Text weight="bold">{company.name}</Text>
      </TableCell>
      <TableCell scope="row">
        <Text>{company.description}</Text>
      </TableCell>
      <TableCell>
        {company.highlights.map((highlight) => (
          <Pill highlight={highlight} key={highlight.category} />
        ))}
      </TableCell>
    </TableRow>
  );
};

export default CompanyResult;
