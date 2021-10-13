import { t } from "../hooks/i18n/i18n";
import { Text } from "grommet";
import styled from "styled-components";

const HeaderText = styled(Text)`
  cursor: pointer;
`;

interface Props {
  onClick: () => void;
}

/**
 * Header for the search box. Doubles up as the button to open the search box
 */
const SearchHeader = ({ onClick }: Props) => {
  return <HeaderText onClick={onClick}>{t("searchTitle")}</HeaderText>;
};

export default SearchHeader;
