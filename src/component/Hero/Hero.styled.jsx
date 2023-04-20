import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.5;
  text-align: center;
  padding: 200px;
  text-transform: uppercase;
  color: #fff;
`;
