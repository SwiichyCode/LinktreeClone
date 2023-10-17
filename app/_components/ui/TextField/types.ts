import { UseFormRegister } from "react-hook-form";

export interface TextFieldOptions {
  labelText: string;
  iconUrl?: string;
  register: UseFormRegister<any>;
  error?: any;
  isProfile?: boolean;
  isPassword?: boolean;
}

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  TextFieldOptions;
