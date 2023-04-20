import { Title } from "../Choice/Choice.styled";
import { Wrap, List, Item, CustomImg, Info } from "./Сlients.styled";

import img6 from "../../image/img6.jpg";
import img7 from "../../image/img7.jpg";
import img8 from "../../image/img8.jpg";
import img9 from "../../image/img9.jpg";
import img10 from "../../image/img10.jpg";

export default function Clients() {
  return (
    <Wrap>
      <Title>Наші клієнти</Title>
      <List>
        <Item imgUrl={img7}>
          <CustomImg imgUrl={img7} />
          <Info>Транспортні підприємства</Info>
        </Item>
        <Item imgUrl={img6}>
          <CustomImg imgUrl={img6} />
          <Info>Зони для пішоходів</Info>
        </Item>
        <Item imgUrl={img8}>
          <CustomImg imgUrl={img8} />
          <Info>Виробничі установи</Info>
        </Item>
        <Item imgUrl={img10}>
          <CustomImg imgUrl={img10} />
          <Info>Oб'єкти спеціального призначення</Info>
        </Item>
        <Item imgUrl={img9}>
          <CustomImg imgUrl={img9} />
          <Info>Приватні садиби</Info>
        </Item>
      </List>
    </Wrap>
  );
}
