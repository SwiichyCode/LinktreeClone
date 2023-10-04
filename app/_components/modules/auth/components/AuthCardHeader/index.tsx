type Props = {
  title: string;
  subtitle: string;
};

export const AuthCardHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="heading">{title}</h1>
      <p className="">{subtitle}</p>
    </div>
  );
};
