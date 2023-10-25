import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegister<any>;
};

export const ImageFieldInput = ({ register, name, ...rest }: Props) => {
  return (
    <input
      className={clsx("absolute w-full h-full opacity-0 cursor-pointer")}
      type="file"
      {...register(name)}
      {...rest}
    />
  );
};
