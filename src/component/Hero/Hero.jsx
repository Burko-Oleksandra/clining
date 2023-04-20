import heroImg from "../../image/hero.jpg";

import { Container, Title } from "./Hero.styled";

export default function Hero() {
  return (
    <Container imgUrl={heroImg}>
      <Title>
        клінінг тротуарної плитки від 50 грн/m2
        <br />
        професійний клінінг з гарантією
      </Title>
    </Container>
  );
}
