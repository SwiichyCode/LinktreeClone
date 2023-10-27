import clsx from "clsx";
import Link from "next/link";
import { navItems } from "./data";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={clsx(
              "hidden md:inline-block px-4 py-2 text-base font-medium transition-colors duration-200 hover:text-purple",
              "md:px-6 md:py-0 md:text-base"
            )}
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
