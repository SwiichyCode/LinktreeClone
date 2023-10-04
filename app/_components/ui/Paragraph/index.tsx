import clsx from "clsx";

type Props = {
  className?: string;
  children: React.ReactNode;
};
export const Paragraph = (props: Props) => {
  const { className, children } = props;

  return <p className={clsx("text-base text-grey", className)}>{children}</p>;
};
