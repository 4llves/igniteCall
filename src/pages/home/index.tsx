import { Heading, Text } from "@ignite-ui/react";
import { Container, Hero, Preview } from "./styles";

import Image from "next/image";
import previewImg from "../../assets/apppreview.png";

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>

      <Preview>
        <Image
          src={previewImg}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando a applicação em funcionamento"
        />
      </Preview>
    </Container>
  );
}
