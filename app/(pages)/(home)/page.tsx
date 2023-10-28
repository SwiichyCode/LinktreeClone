import { Header } from "@/app/_components/modules/landing/Header";
import { Hero } from "@/app/_components/modules/landing/Hero";
import { PreviewSlidesShow } from "@/app/_components/modules/landing/PreviewSlidesShow";
import { Footer } from "@/app/_components/modules/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <PreviewSlidesShow />
      <Footer />
    </>
  );
}
