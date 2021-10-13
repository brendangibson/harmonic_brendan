import { Box, Button } from "grommet";
import { t } from "../hooks/i18n/i18n";

interface Props {
  onSaveClick: () => void;
  onSearchClick: () => void;
}

/**
 * Bar at the bottom of the search box that shows a couple of buttons for saving and searching
 */
const ButtonBar = ({ onSaveClick, onSearchClick }: Props) => {
  return (
    <Box gap="small" justify="end" direction="row">
      <Button secondary label={t("saveAsNewSearch")} onClick={onSaveClick} />
      <Button primary label={t("search")} onClick={onSearchClick} />
    </Box>
  );
};

export default ButtonBar;
