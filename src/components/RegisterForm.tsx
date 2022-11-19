import * as React from "react";
import { useForm } from "react-hook-form";
import { Input, Button, Flex } from "@mantine/core";
import { useAuthStore } from "../store";
import { useNavigate, useLocation } from "react-router-dom";

interface FormType {
  email: string;
}

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: { email: "angel.santos@geeklopers.mx" },
  });
  const logIn = useAuthStore((state) => state.logIn);

  const onSubmit = (payload: FormType): void => {
    logIn(payload.email);
    navigate(from, { replace: true });
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
