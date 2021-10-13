import styled from "styled-components";
import { Highlight } from "../types/company";
import { Text } from "grommet";
import { getColor } from "../setup/company";

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 4px 8px;
  background: ${(props) => props.color};
  display: inline-block;
  margin-right: 4px;
`;

interface Props {
  highlight: Highlight;
}

/**
 * Shows a pill component for a company highlight
 */
const Pill = ({ highlight }: Props) => {
  return (
    <Wrapper color={getColor(highlight.category)}>
      <Text size="small">{highlight.text ?? highlight.category}</Text>
    </Wrapper>
  );
};

export default Pill;
