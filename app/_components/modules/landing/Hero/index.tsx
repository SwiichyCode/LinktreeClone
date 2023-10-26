import { ActiveUser } from "../ActiveUser";
import { CTA } from "../CTA";

export const Hero = () => {
  return (
    <section className="flex items-center justify-between m-auto md:max-w-6xl">
      <CTA />
      <ActiveUser />
    </section>
  );
};
