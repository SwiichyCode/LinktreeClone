import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputOptions {
  iconUrl?: string;
  register: UseFormRegister<FieldValues>;
  error: any;
}

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputOptions;
