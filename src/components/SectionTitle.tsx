import styled from "styled-components";

const StyledSectionTitle = styled.header`
  max-width: fit-content;
  font-size: 1.2em;
  letter-spacing: 2px;
  padding: 5px 30px;
  padding-top: 30px;
  margin: 0 auto;
  margin-bottom: 30px;
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
