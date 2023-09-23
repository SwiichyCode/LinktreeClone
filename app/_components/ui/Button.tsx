import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  theme?: "primary" | "secondary";
  iconUrl?: string;
  href?: string;
}

const getButtonClasses = (theme: "primary" | "secondary") => {
  if (theme === "primary") {
    return "text-white bg-purple hover:bg-purple-hover";
  } else {
    return "text-purple bg-transparent border border-purple hover:bg-purple-hover-secondary";
  }
};

const getContent = (
  text: string,
  href: string | undefined,
  iconUrl: string | undefined
) => {
  if (!href && iconUrl) {
    return <Image src={iconUrl} width={20} height={20} alt="icon" />;
  } else if (href && iconUrl) {
    return (
      <Link href={href} className="flex items-center justify-center">
        <Image
          className="md:hidden"
          src={iconUrl}
          width={20}
          height={20}
          alt="icon"
        />
        <span className="hidden md:block">{text}</span>
      </Link>
    );
  } else {
    return text;
  }
};

export const Button = ({
  text,
  disabled,
  theme = "primary",
  iconUrl,
  href,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "font-semibold rounded-lg transition py-3",
        disabled && "opacity-25 cursor-not-allowed",
        iconUrl ? "px-4" : "px-7",
        getButtonClasses(theme)
      )}
      {...rest}
    >
      {getContent(text || "", href, iconUrl)}
    </button>
  );
};
