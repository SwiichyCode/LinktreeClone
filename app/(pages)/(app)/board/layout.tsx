import { PageLayout } from "@/app/_components/container/PageLayout";
import { MainLayout } from "@/app/_components/container/MainLayout";
import { HeaderBoard } from "@/app/_components/layouts/Header/HeaderBoard";
import { Preview } from "@/app/_components/layouts/Preview";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <PageLayout>
      <HeaderBoard />
      <MainLayout>
        <Preview />
        {children}
      </MainLayout>
    </PageLayout>
  );
}
