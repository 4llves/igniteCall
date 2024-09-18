import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "lucide-react";
import { Form } from "./styles";

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
}
