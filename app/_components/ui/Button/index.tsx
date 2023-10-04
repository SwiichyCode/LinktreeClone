import { forwardRef } from "react";
import type { Ref, ButtonProps, ButtonVariant } from "./types";
import clsx from "clsx";

const getVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "secondary":
      return "btn-secondary";
    default:
      return undefined;
  }
};

export const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { variant = "primary", className, children, ...rest } = props;

  const merged = clsx("btn", getVariant(variant), className);

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
