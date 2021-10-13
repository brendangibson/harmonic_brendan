import { Menu } from "grommet";
import { t } from "../hooks/i18n/i18n";
import { Query, QueryClause } from "../types/search";
import Clause from "./Clause";

interface Props {
  query: Query;
  onAddNewAnd: () => void;
  onAddNewOr: () => void;
  onDelete: (id: string) => void;
  onChange: (query: Query) => void;
}

/**
 *  Shows the clauses that make up a search query
 *
 *  The current query state is stored here
 */
const Clauses = ({
  query,
  onAddNewAnd,
  onAddNewOr,
  onDelete,
  onChange,
}: Props) => {
  const handleClauseChange = (newClause: QueryClause) => {
    onChange([
      ...query.filter((clause) => clause.id !== newClause.id),
      newClause,
    ]);
  };

  return (
    <div>
      {query.map((clause, index) => (
        <Clause
          clause={clause}
          key={index}
          onDelete={() => onDelete(clause.id)}
          onChange={handleClauseChange}
        />
      ))}
      <Menu
        label={t("addNew")}
        items={[
          { label: t("and"), onClick: onAddNewAnd },
          { label: t("or"), onClick: onAddNewOr },
        ]}
      />
    </div>
  );
};

export default Clauses;
