"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type Props = {
  href: string;
  iconUrl: string;
  text: string;
};

export const ButtonNavigation = ({ href, iconUrl, text }: Props) => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();
  const isCurrentPath = pathname === href;
  const imageUrl =
    pathname === href || active ? `${iconUrl}-active.svg` : `${iconUrl}.svg`;

  return (
    <button
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className={clsx(
        "rounded-lg transition",
        isCurrentPath && "bg-purple-hover-secondary"
      )}
    >
      <Link
        href={href}
        className="h-[42px] md:h-[46px] flex items-center justify-center gap-2 px-7"
      >
        <Image src={imageUrl} width={20} height={20} alt="icon" />
        <span
          className={clsx(
            "hidden font-semibold lg:block",
            (active || isCurrentPath) && "text-purple"
          )}
        >
          {text}
        </span>
      </Link>
    </button>
  );
};
