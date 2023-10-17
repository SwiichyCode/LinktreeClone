import { useCookie } from "@/app/_hooks/useCookie";
import { PageLayout } from "@/app/_components/container/PageLayout";
import { MainPreviewLayout } from "@/app/_components/container/MainPreviewLayout";
import { HeaderPreview } from "@/app/_components/layouts/Header/HeaderPreview";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { cookie } = useCookie("user_id");

  return (
    <PageLayout isPreview>
      <HeaderPreview userId={cookie?.value} />
      <MainPreviewLayout>{children}</MainPreviewLayout>
    </PageLayout>
  );
}
