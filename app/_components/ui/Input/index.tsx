import Image from "next/image";
import type { InputProps } from "./types";
import clsx from "clsx";

export const Input = (props: InputProps) => {
  const { iconUrl, register, error, ...rest } = props;

  return (
    <div role="group" className="relative">
      {iconUrl && (
        <Image
          className="absolute top-1/2 left-4 -translate-y-1/2"
          role="icon"
          src={iconUrl}
          alt="icon"
          width={16}
          height={16}
        />
      )}
      <input
        tabIndex={0}
        className={clsx(
          "h-[48px] w-full rounded-lg border text-darkgrey bg-white caret-input pl-11 pr-4",
          "hover:border-[#633CFF] hover:shadow-input-focus focus:outline-none focus:border-[#633CFF] focus:shadow-input-focus",
          error ? "border-error" : "border-input"
        )}
        {...register(props.name as string)}
        {...rest}
      />
    </div>
  );
};
