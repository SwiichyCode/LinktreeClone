type Props = {
  title: string;
  subtitle: string;
};

export const FormHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-2 mb-10">
      <h1 className="heading">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};
