import clsx from "clsx";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

type Props = {
  from?: "hero" | "footer";
};

export const CTA = ({ from }: Props) => {
  const isHero = from === "hero";
  const isFooter = from === "footer";

  return (
    <article
      className={clsx(
        "flex flex-col gap-8 md:gap-12",
        isFooter && "text-white text-center items-center"
      )}
    >
      <h1 className="max-w-xl font-bold text-6xl">
        Share your{" "}
        <span className={clsx(isHero && "text-grey")}>developer profile</span>{" "}
        with the <span className="text-purple">world.</span>
      </h1>

      <ButtonLink
        href={URL_CONSTANT.SIGN_UP}
        text="Get started now"
        variant="primary"
        from="landing"
        iconSrc="/icon-chevron-right.svg"
      />
    </article>
  );
};
