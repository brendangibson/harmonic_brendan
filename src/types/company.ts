// Types for company data

export interface Highlight {
  category: CompanyHighlightCategory;
  date_added?: Date;
  text?: string;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  highlights: Highlight[];
}

export enum CompanyHighlightCategory {
  MAKES_LOTTA_MONEY = "MAKES_LOTTA_MONEY",
  IS_HARMONIC = "IS_HARMNOIC", // [sic]
}
