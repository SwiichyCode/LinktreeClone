import { SectionContainer } from "@/app/_components/container/SectionContainer";
import { ActiveUser } from "../ActiveUser";
import { CTA } from "../CTA";

export const Hero = () => {
  return (
    <SectionContainer className="flex flex-wrap items-center justify-between gap-12">
      <CTA from="hero" />
      <ActiveUser />
    </SectionContainer>
  );
};
