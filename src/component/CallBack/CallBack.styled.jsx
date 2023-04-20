import styled from "styled-components";

export const Wrap = styled.section`
  height: 185px;
  padding: 45px 45px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #fcca19;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1150px;
  margin: auto;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  color: #fff;
  margin-bottom: 14px;
`;

export const Descr = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  color: #fff;
`;

export const CustomBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-transform: uppercase;
  cursor: pointer;
  width: 242px;
  height: 58px;
  border: none;
`;
