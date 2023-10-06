import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";

type Props = {
  href?: string;
  iconSrc?: string;
  text: string;
  onClick?: () => void;
};

type HandleLinkProps = {
  children: React.ReactNode;
  href?: string;
};

const ButtonWithLink = ({ children, href }: HandleLinkProps) => {
  return href ? (
    <Link className="flex justify-center items-center" href={href}>
      {children}
    </Link>
  ) : (
    children
  );
};

export const ButtonLink = (props: Props) => {
  const { href, text, iconSrc, ...rest } = props;

  return (
    <ButtonWithLink href={href}>
      <Button
        className="h-[42px] md:h-[46px] px-[15px] md:px-[27px]"
        variant="secondary"
        {...rest}
      >
        {iconSrc && (
          <Image
            className="md:hidden"
            src={iconSrc}
            width={20}
            height={20}
            alt={text}
          />
        )}
        <span className="hidden md:block">{text}</span>
      </Button>
    </ButtonWithLink>
  );
};
