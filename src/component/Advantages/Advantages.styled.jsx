import styled from "styled-components";

export const Wrap = styled.section`
  margin: 80px 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 80px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 249px;
  height: 249px;
  transition: scale 250ms linear;

  :hover,
  :focus {
    scale: 1.3;
    cursor: pointer;
  }

  :hover p {
    color: #fcca19;
  }
`;

export const Descr = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #fff;
`;
