import { useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import Image from "next/image";
import clsx from "clsx";

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  iconUrl?: string;
  register: any;
  setFocus: any;
  error: any;
}

export const Input = ({
  name,
  iconUrl,
  register,
  setFocus,
  error,
  ...rest
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(wrapperRef, () => {
    setIsFocused(false);
  });

  const handleFocus = () => {
    setIsFocused(true);
    setFocus(name);
  };

  return (
    <div
      role="group"
      className={clsx(
        "flex items-center gap-3 rounded-lg py-3 px-4 border cursor-text",
        isFocused && "border-input-focus shadow-input-focus",
        error ? "border-error" : "border-input"
      )}
      ref={wrapperRef}
      onClick={handleFocus}
    >
      {iconUrl && (
        <Image role="icon" src={iconUrl} alt="icon" width={20} height={20} />
      )}
      <input
        className="w-full text-darkgrey caret-input focus:outline-none"
        {...register(name)}
        {...rest}
      />
    </div>
  );
};
