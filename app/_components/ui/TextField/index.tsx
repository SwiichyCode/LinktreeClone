import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";
import { Label } from "../Label";
import { Input } from "../Input";

interface TextFieldOptions {
  labelText: string;
  iconUrl?: string;
  register: UseFormRegister<any>;
  error?: any;
  isProfile?: boolean;
}

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  TextFieldOptions;

export const TextField = (props: InputProps) => {
  const { labelText, iconUrl, register, error, isProfile, ...rest } = props;

  return (
    <div
      className={clsx(
        "flex gap-2",
        isProfile ? "flex-row items-center justify-between" : "flex-col"
      )}
    >
      <Label
        labelText={labelText}
        htmlFor={props.name!}
        error={error}
        isProfile={isProfile}
      />
      <Input
        name={props.name!}
        iconUrl={iconUrl}
        register={register}
        error={error}
        isProfile={isProfile}
        {...rest}
      />
    </div>
  );
};
