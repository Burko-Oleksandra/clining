import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Item = styled.li`
  position: relative;
  width: 335px;

  :hover div,
  :focus div {
    border-color: #fcca19;
  }

  :hover span,
  :focus span {
    display: block;
  }
`;

export const CustomImg = styled.div`
  display: block;
  width: 335px;
  height: 290px;
  padding: 10px;
  border: 15px solid #191b1c;
  margin-bottom: 20px;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: border-color 400ms linear;
`;

export const Info = styled.p`
  height: 55px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: #fff;
  margin-bottom: 10px;
`;
