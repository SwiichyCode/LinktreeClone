import { PageLayout } from "@/app/_components/container/PageLayout";
import { MainPreviewLayout } from "@/app/_components/container/MainPreviewLayout";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <PageLayout isPreview isProfile>
      <MainPreviewLayout>{children}</MainPreviewLayout>
    </PageLayout>
  );
}
