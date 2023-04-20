import styled from "styled-components";

export const Wrap = styled.section`
  width: 100%;
  max-width: 1170px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const AboutWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 220px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    background: -o-linear-gradient(355.74deg, #fff 9.51%, #fcca19 90.23%);
    background: linear-gradient(94.26deg, #fff 9.51%, #fcca19 90.23%);
    width: 6px;
    height: calc(100% + 80px);
    top: -40px;
    left: calc(50% - 3px);
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.4;
  text-align: center;
  color: #fff;
  margin-bottom: 100px;
`;

export const DescrRight = styled.p`
  width: 290px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  margin: 0;
  position: relative;
  text-align: justify;

  ::before {
    content: "";
    position: absolute;
    opacity: 0.3;
    border: 1px solid #fff;
    width: 40px;
    top: 10px;
    left: -110px;
  }
`;

export const DescrLeft = styled.p`
  width: 290px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  color: #fff;
  margin: 0;
  position: relative;
  text-align: justify;

  ::after {
    content: "";
    position: absolute;
    opacity: 0.3;
    border: 1px solid #fff;
    width: 40px;
    top: 10px;
    right: -110px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  gap: 120px;

  :last-child {
    padding-top: 80px;
  }
`;
