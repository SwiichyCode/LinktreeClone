import { ActiveUser } from "../ActiveUser";
import { CTA } from "../CTA";

export const Hero = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-12 m-auto md:max-w-6xl mb-8 md:mb-32">
      <CTA />
      <ActiveUser />
    </section>
  );
};
