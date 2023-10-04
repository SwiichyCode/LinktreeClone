import clsx from "clsx";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: React.ReactNode;
};

export const Heading = (props: Props) => {
  const { as = "h1", className, children } = props;

  const Tag = as;

  return (
    <Tag
      className={clsx(
        "text-2xl md:text-4xl text-darkgrey font-bold",
        className
      )}
    >
      {children}
    </Tag>
  );
};
