import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";

type Props = {
  href?: string;
  iconSrc?: string;
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  from?: "landing" | "app";
};

type HandleLinkProps = {
  children: React.ReactNode;
  href?: string;
};

const ButtonWithLink = ({ children, href }: HandleLinkProps) => {
  return href ? (
    <Link className="max-w-fit" href={href}>
      {children}
    </Link>
  ) : (
    children
  );
};

export const ButtonLink = (props: Props) => {
  const { href, text, iconSrc, variant = "secondary", from, ...rest } = props;
  const buttonMerged =
    from === "landing"
      ? "h-[42px] md:h-[54px] px-[15px] md:px-[32px]"
      : "h-[42px] md:h-[46px] px-[15px] md:px-[27px]";

  return (
    <ButtonWithLink href={href}>
      <Button
        className={clsx("flex items-center gap-2", buttonMerged)}
        variant={variant}
        {...rest}
      >
        {iconSrc && from !== "landing" && (
          <Image
            className="md:hidden"
            src={iconSrc}
            width={20}
            height={20}
            alt={text}
          />
        )}
        <span className="hidden md:block">{text}</span>
        {iconSrc && from === "landing" && (
          <Image src={iconSrc} width={20} height={20} alt={text} />
        )}
      </Button>
    </ButtonWithLink>
  );
};
