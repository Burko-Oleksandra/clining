import { GiSmartphone } from "react-icons/gi";

import { Wrap, Title, ContentWrap, Descr, CustomBtn } from "./CallBack.styled";

export default function CallBack() {
  return (
    <Wrap>
      <ContentWrap>
        <div>
          <Title>потрібен клінінг тротуарної плитки?</Title>
          <Descr>залиште заявку і ми зв'яжемося з вами</Descr>
        </div>
        <CustomBtn>
          <GiSmartphone color="#fcca19" size="1.5em" />
          залишити запит
        </CustomBtn>
      </ContentWrap>
    </Wrap>
  );
}
