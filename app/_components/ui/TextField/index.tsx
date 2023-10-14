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
        "flex flex-col gap-2",
        isProfile && "md:flex-row md:items-center md:justify-between"
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
