import * as React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Flex } from "@mantine/core";

interface FormType {
  email: string;
}

const RegisterForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: { email: "angel.santos@geeklopers.mx" },
  });

  const onSubmit = (payload: FormType): void => {
    console.log(payload);
  };

  return (
    <Flex direction={"column"}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="text"
          placeholder="Email"
          sx={{ marginBottom: 16 }}
        />
        <Button type="submit">Register</Button>
      </form>
    </Flex>
  );
};

export default RegisterForm;
