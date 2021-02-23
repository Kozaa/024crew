import styled from "styled-components";

const StyledSectionTitle = styled.header`
  max-width: fit-content;
  font-size: 1.2em;
  letter-spacing: 2px;
  padding: 5px 30px;
  margin: 30px auto;
  border-bottom: ${({ theme }) => "2px solid " + theme.colors.secondary};
  text-align: center;
`;

interface Props {
  children: string;
}

const SectionTitle = ({ children }: Props) => (
  <StyledSectionTitle>{children}</StyledSectionTitle>
);

export default SectionTitle;
