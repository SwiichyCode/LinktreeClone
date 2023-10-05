import clsx from "clsx";
import Image from "next/image";

export const Preview = () => {
  return (
    <div
      className={clsx(
        "hidden bg-white rounded-xl",
        "lg:flex lg:justify-center lg:items-center lg:min-w-[460px]"
      )}
    >
      <Image
        src="/illustration-phone-mockup.svg"
        width={307}
        height={631}
        alt=""
      />
    </div>
  );
};
