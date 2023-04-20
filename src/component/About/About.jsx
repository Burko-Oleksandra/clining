import {
  Wrap,
  Title,
  DescrRight,
  DescrLeft,
  AboutWrap,
  Info,
} from "./About.styled";

export default function About() {
  return (
    <Wrap>
      <Title>З нами працювати вигідно</Title>
      <AboutWrap>
        <Info>
          <DescrLeft>
            Гарантуємо кращі ціни. Наша пропозиція буде найбульш вигідною для
            вас.
          </DescrLeft>
          <DescrLeft>Даємо гарантію на виконані роботи.</DescrLeft>
          <DescrLeft>
            Передплата 30%. Залишок суми тільки після закінчення всіх робіт.
          </DescrLeft>
        </Info>
        <Info>
          <DescrRight>
            Виконуємо роботи "під ключ". Обирайте сподобавшийся варіант, а все
            інше ми зробимо самі.
          </DescrRight>
          <DescrRight>Дотримуємося термінів виконання робіт.</DescrRight>
          <DescrRight>Прибираємо все будівельне сміття за собою.</DescrRight>
        </Info>
      </AboutWrap>
    </Wrap>
  );
}
