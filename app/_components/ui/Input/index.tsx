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
          "h-[48px] w-full rounded-lg border text-darkgrey bg-transparent caret-input pl-11 pr-4",
          "focus:outline-[#633CFF] focus:outline-1 focus:shadow-input-focus",
          error ? "border-error" : "border-input"
        )}
        {...register(props.name)}
        {...rest}
      />
    </div>
  );
};
