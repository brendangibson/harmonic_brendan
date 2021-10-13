import { CompanyHighlightCategory } from "../types/company";

/**
 * Maps a highlight type to the color to be shown
 */

const colorMap = {
  [CompanyHighlightCategory.IS_HARMONIC]: "#81FCED",
  [CompanyHighlightCategory.MAKES_LOTTA_MONEY]: "#FFCA58",
};

export const getColor = (highlight: CompanyHighlightCategory) => {
  return colorMap[highlight] ?? "#6FFFB0";
};
