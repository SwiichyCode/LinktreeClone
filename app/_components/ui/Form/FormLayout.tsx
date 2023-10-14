import { FormHeader } from "./FormHeader";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export const FormLayout = ({ title, subtitle, children }: Props) => {
  return (
    <div className="flex flex-col flex-grow bg-white rounded-xl p-6 md:p-10">
      <FormHeader title={title} subtitle={subtitle} />
      {children}
    </div>
  );
};
