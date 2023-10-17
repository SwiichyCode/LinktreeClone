import { useState } from "react";
import Image from "next/image";
import type { InputProps } from "./types";
import clsx from "clsx";

export const Input = (props: InputProps) => {
  const { iconUrl, register, error, isProfile, isPassword, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      role="group"
      className={clsx(
        "w-full relative flex justify-end",
        isProfile && "md:w-2/3"
      )}
    >
      {iconUrl && !isProfile && (
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
          "h-[48px] w-full rounded-lg border text-darkgrey bg-white caret-input",
          "hover:border-[#633CFF] hover:shadow-input-focus focus:outline-none focus:border-[#633CFF] focus:shadow-input-focus",
          error ? "border-error" : "border-input",
          isProfile ? "px-4" : "pl-11 pr-4"
        )}
        type={isPassword && !showPassword ? "password" : "text"}
        {...register(props.name as string)}
        {...rest}
      />

      {isPassword && (
        <button
          tabIndex={0}
          type="button"
          aria-label="toggle password visibility"
          className="absolute top-1/2 right-4 -translate-y-1/2"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          <Image
            role="icon"
            src={showPassword ? "/icon-hide.svg" : "/icon-show.svg"}
            alt="icon"
            width={16}
            height={16}
          />
        </button>
      )}
    </div>
  );
};
