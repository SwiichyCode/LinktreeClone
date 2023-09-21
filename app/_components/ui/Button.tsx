import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({ text, disabled, ...rest }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "text-white bg-purple font-semibold rounded-lg py-3 px-7 transition",
        "hover:bg-purple-hover",
        disabled && "opacity-25 cursor-not-allowed"
      )}
      {...rest}
    >
      {text}
    </button>
  );
};
