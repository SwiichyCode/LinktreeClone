import { Heading } from "@/app/_components/ui/Heading";
import { Paragraph } from "@/app/_components/ui/Paragraph";

type Props = {
  title: string;
  subtitle: string;
};

export const AuthCardHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Heading as="h1">{title}</Heading>
      <Paragraph>{subtitle}</Paragraph>
    </div>
  );
};
