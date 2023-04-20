import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  text-align: center;
  text-transform: uppercase;
  color: #fcca19;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 40px;
  position: relative;
  transition: scale 250ms linear;

  ::before {
    content: "";
    position: absolute;
    top: calc(100% + 20px);
    width: 120px;
    height: 1px;
    background-color: #fff;
    left: calc(50% - 60px);
  }

  :hover,
  :focus {
    scale: 1.2;
  }
`;

export const Descr = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin: 0;
  margin-bottom: 80px;
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
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      ${(props) => `url(${props.imgUrl})`};
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

export const Price = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  color: #d0d0d0;
`;

export const Info = styled.p`
  height: 55px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.3;
  color: #fff;
  margin-bottom: 10px;
`;

export const Details = styled.span`
  display: none;
  position: absolute;
  width: 270px;
  top: 30px;
  left: 30px;
  text-align: justify;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  color: #fff;
`;
