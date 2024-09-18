import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "./styles";

const claimUsernameFormSchema = z.object({
  username: z.string(),
});

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>;

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>();

  async function handlerClaimUsername(data: ClaimUsernameFormData) {
    console.log(data);
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handlerClaimUsername)}>
      <TextInput
        {...register("username")}
        size="sm"
        prefix="ignite.com/"
        placeholder="seu-usuario"
        crossOrigin=""
        onPointerEnterCapture=""
        onPointerLeaveCapture=""
      />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  );
}
