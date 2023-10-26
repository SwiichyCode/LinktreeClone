import clsx from "clsx";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { URL_CONSTANT } from "@/app/_constants/url.constant";

export const CTA = () => {
  return (
    <article className={clsx("flex flex-col gap-12")}>
      <h1 className="max-w-xl font-bold text-6xl">
        Share your <span className="text-grey">developer profile</span> with the{" "}
        <span className="text-purple">world.</span>
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
