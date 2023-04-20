import { SiSpeedtest } from "react-icons/si";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { RiUserStarLine } from "react-icons/ri";
import { AiOutlineAim } from "react-icons/ai";

import { List, Item, Wrap, Descr } from "./Advantages.styled";

export default function Advantages() {
  return (
    <Wrap>
      <List>
        <Item>
          <RiUserStarLine color="#fcca19" size="8em" />
          <Descr>Професійне обладнання та препарати</Descr>
        </Item>
        <Item>
          <HiOutlineEmojiHappy color="#fcca19" size="8em" />
          <Descr>Задоволені клієнти</Descr>
        </Item>
        <Item>
          <SiSpeedtest color="#fcca19" size="8em" />
          <Descr>Якісні та швидкі послуги</Descr>
        </Item>
        <Item>
          <AiOutlineAim color="#fcca19" size="8em" />
          <Descr>Відповідальний підхід</Descr>
        </Item>
      </List>
    </Wrap>
  );
}
