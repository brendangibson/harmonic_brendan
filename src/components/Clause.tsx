import { Menu, Select, TextInput, Text, Box } from "grommet";
import { t } from "../hooks/i18n/i18n";
import { Combination, Operation, QueryClause } from "../types/search";
import { fieldSetup, operationsSetup } from "../setup/clause";

interface Props {
  clause: QueryClause;
  onDelete: () => void;
  onChange: (clause: QueryClause) => void;
}

/**
 * Shows a line for one clause in a search query
 * Shows the combination operation (AND/OR)
 * Shows the field to search
 * Shows the operation to do on that search
 * Shows an operand if the operation needs one
 *
 * State is handled up the tree
 */
const Clause = ({ clause, onDelete, onChange }: Props) => {
  const fieldLabels = fieldSetup.map((field) => t(field.label));

  const field = fieldSetup[clause.field];

  const handleFieldChange = (newFieldName: string) => {
    const newField = fieldSetup.find((item) => item.label === newFieldName);

    if (newField) {
      onChange(Object.assign(clause, { field: newField }));
    }
  };

  const handleOperationChange = (newOperation: Operation) => {
    onChange(Object.assign(clause, { operation: newOperation }));
  };

  const handleOperandChange = (newOperand: string) => {
    onChange(Object.assign(clause, { operand: newOperand }));
  };

  const leftLabel = t(
    clause.combination === Combination.FIRST
      ? "where"
      : clause.combination === Combination.AND
      ? "and"
      : "or"
  );

  return (
    <Box direction="row" gap="small" align="center">
      <Box align="center" width="xsmall" alignContent="start">
        <Text>{leftLabel}</Text>
      </Box>
      <Box>
        <Select
          options={fieldLabels}
          value={t(field.label)}
          onChange={({ value }) => handleFieldChange(value)}
        />
      </Box>
      <Box>
        <Select
          options={field.operations}
          labelKey={(item: Operation) => {
            return t(operationsSetup[item].label);
          }}
          value={operationsSetup[clause.operation]}
          onChange={({ value }) => handleOperationChange(value)}
          valueLabel={
            <Box pad="small">
              <Text>{t(operationsSetup[clause.operation].label)}</Text>
            </Box>
          }
        />
      </Box>
      {operationsSetup[clause.operation].showOperand && (
        <Box>
          <TextInput
            placeholder="..."
            value={clause.operand}
            onChange={(event) => handleOperandChange(event.target.value)}
          />
        </Box>
      )}
      {clause.combination !== Combination.FIRST && (
        <Box>
          <Menu
            label={"..."}
            items={[{ label: t("delete"), onClick: onDelete }]}
          />
        </Box>
      )}
    </Box>
  );
};

export default Clause;
