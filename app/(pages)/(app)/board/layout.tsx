type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <main className="rounded-xl bg-white m-4 p-6">{children}</main>;
}
