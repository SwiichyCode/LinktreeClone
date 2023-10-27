type Props = {
  children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
  return <div className="px-5 md:px-12 text-black">{children}</div>;
}
