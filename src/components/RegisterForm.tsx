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

  const { register, handleSubmit, formState } = useForm<FormType>();
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
          {...register("email", {
            required: true,
            validate: (value) => value.includes("@"),
          })}
          type="text"
          placeholder="Email"
          sx={{ marginBottom: 16 }}
          invalid={!!formState.errors.email}
        />
        <Button type="submit">Register</Button>
      </form>
    </Flex>
  );
};

export default RegisterForm;
