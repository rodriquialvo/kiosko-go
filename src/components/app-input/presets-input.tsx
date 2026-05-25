import AppInput from "./app-input";
import { AppInputProps } from "./types";

export function EmailInput(props: AppInputProps) {
  return (
    <AppInput
      label="Correo electrónico"
      placeholder="tu@email.com"
      leftIcon="mail"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      textContentType="emailAddress"
      {...props}
    />
  );
}

export function PasswordInput(props: AppInputProps) {
  return (
    <AppInput
      label="Contraseña"
      placeholder="••••••••"
      leftIcon="lock"
      secure
      autoCapitalize="none"
      autoCorrect={false}
      textContentType="password"
      {...props}
    />
  );
}

export function SearchInput(props: AppInputProps) {
  return (
    <AppInput
      placeholder="Buscar..."
      leftIcon="search"
      variant="filled"
      size="md"
      clearable
      {...props}
    />
  );
}

export function NameInput(props: AppInputProps) {
  return (
    <AppInput
      label="Nombre"
      placeholder="Tu nombre"
      leftIcon="user"
      autoCapitalize="words"
      {...props}
    />
  );
}

export function PhoneInput(props: AppInputProps) {
  return (
    <AppInput
      label="Teléfono"
      placeholder="Tu teléfono"
      leftIcon="phone"
      keyboardType="phone-pad"
      textContentType="telephoneNumber"
      {...props}
    />
  );
}

export function DateInput(props: AppInputProps) {
  return (
    <AppInput
      label="Fecha"
      placeholder="DD/MM/AAAA"
      leftIcon="calendar"
      keyboardType="number-pad"
      {...props}
    />
  );
}
