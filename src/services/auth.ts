import { LoginFormData } from "@/schemas/auth";

export const authService = {
  async login(_data: LoginFormData): Promise<void> {
    return Promise.resolve();
  },
};
