import styled from "styled-components";

const StyledSectionTitle = styled.header`
  font-size: 1.2em;
  letter-spacing: 2px;
  padding: 5px 30px;
  margin-bottom: 30px;
  border-bottom: ${({ theme }) => "2px solid " + theme.colors.secondary};
`;

interface Props {
  children: string;
}

const SectionTitle = ({ children }: Props) => (
  <StyledSectionTitle>{children}</StyledSectionTitle>
);

export default SectionTitle;
