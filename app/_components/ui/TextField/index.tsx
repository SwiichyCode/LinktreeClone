import clsx from "clsx";
import { Label } from "../Label";
import { Input } from "../Input";
import type { InputProps } from "./types";

export const TextField = (props: InputProps) => {
  const {
    labelText,
    iconUrl,
    register,
    error,
    isProfile,
    isPassword,
    ...rest
  } = props;

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
        isPassword={isPassword}
        {...rest}
      />
    </div>
  );
};
