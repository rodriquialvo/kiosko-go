// src/screens/auth/login/login.controller.ts
import { LoginFormData } from "@/schemas/auth";
import { authService } from "@/services/auth";
import { EcosystemType, useEcosystemStore } from "@/store/ecosystem/ecosystem.store";
import { router } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

export function useLoginController() {
  const [isLoading, setIsLoading] = useState(false);
  const ecosystemType = useEcosystemStore((state) => state.ecosystemType);

  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const submit = async (data: LoginFormData) => {
    router.push("/home")
  };

  const onPressRegister = () => {
    // router.push("/root/(auth)/(register)/personal-info");
  };

  return { control, ecosystemType, handleSubmit, submit, onPressRegister, isLoading };
}
