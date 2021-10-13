import { Field, Operation } from "../types/search";
import I18nStrings from "../hooks/i18n/en_US";

// Setup how all of the inputs relate to each other

export interface ClauseField {
  field: Field;
  label: keyof typeof I18nStrings;
  operations: Operation[];
}

const allOperations: Operation[] = [
  Operation.CONTAINS,
  Operation.DOES_NOT_CONTAIN,
  Operation.IS_EMPTY,
  Operation.IS_EXACTLY,
  Operation.IS_NOT_EMPTY,
];

export const fieldSetup: ClauseField[] = [
  { field: Field.COMPANY, operations: allOperations, label: "companyName" },
];

interface OperationSetup {
  showOperand: boolean;
  label: keyof typeof I18nStrings;
}

export const operationsSetup: Record<Operation, OperationSetup> = {
  [Operation.CONTAINS]: { showOperand: true, label: "contains" },
  [Operation.DOES_NOT_CONTAIN]: { showOperand: true, label: "doesNotContain" },
  [Operation.IS_EMPTY]: { showOperand: false, label: "isEmpty" },
  [Operation.IS_EXACTLY]: { showOperand: true, label: "isExactly" },
  [Operation.IS_NOT_EMPTY]: { showOperand: false, label: "isNotEmpty" },
};
