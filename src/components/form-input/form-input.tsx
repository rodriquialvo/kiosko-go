import { Control, Controller, FieldValues, Path, RegisterOptions } from "react-hook-form";
import AppInput from "../app-input/app-input";
import { AppInputProps } from "../app-input/types";

type FormInputProps<T extends FieldValues> = AppInputProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
};

export function FormInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <AppInput
          {...props}
          value={value ?? ""}
          onChangeText={onChange}
          onBlur={onBlur}
          errorText={error?.message}
        />
      )}
    />
  );
}
