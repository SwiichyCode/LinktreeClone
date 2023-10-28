import clsx from "clsx";
import Link from "next/link";
import { CTA } from "../CTA";
import { Marquee } from "@/app/_components/ui/Marquee";

export const Footer = () => {
  const list = ["Actualizing", "Collaboration", "Integrations", "Templates"];
  const nav = ["About", "Contact", "Terms", "Privacy"];

  return (
    <footer
      className={clsx(
        "bg-black text-white px-6 py-12 -m-5",
        "md:max-w-6xl md:m-auto md:rounded-3xl md:mb-12"
      )}
    >
      <div
        className={clsx(
          "border-b border-gray-700 pb-4",
          "md:flex md:flex-col md:items-center"
        )}
      >
        <CTA from="footer" />
        <Marquee list={list} />
      </div>

      <div className="flex flex-col gap-5 mt-4">
        <p className=" lg:max-w-xl">
          A brand new free podcasting platform—the easiest way to create,
          distribute, and monetize your show.
        </p>
        <span>© 2023 SwiichyDev_</span>
      </div>

      <nav className="mt-4">
        <ul className="flex flex-col gap-2">
          {nav.map((item, index) => (
            <li key={index}>
              <Link
                href={`/${item.toLowerCase()}`}
                className="hover:underline leading-8"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
