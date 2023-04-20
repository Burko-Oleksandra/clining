import { Wrap, StepImg } from "./Step.styled";

import step from "../../image/step.png";

export default function Step() {
  return (
    <Wrap>
      <StepImg src={step} />
    </Wrap>
  );
}
