import React from "react";
import styled from "styled-components";

const CrewMemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

interface Props {
  img: string;
  name: string;
}

const CrewMember = ({ img, name }: Props) => (
  <CrewMemberWrapper>
    <StyledImg src={img} />
    <span style={{ margin: "20px 0" }}>{name}</span>
  </CrewMemberWrapper>
);

export default CrewMember;
