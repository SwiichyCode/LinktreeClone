import { Header } from "@/app/_components/layouts/Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="md:m-6">
      <Header />
      {children}
    </div>
  );
}
