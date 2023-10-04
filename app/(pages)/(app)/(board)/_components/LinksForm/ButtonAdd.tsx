import { Button } from "@/app/_components/ui/Button";

type Props = {
  addLink: () => void;
};

export const ButtonAdd = ({ addLink }: Props) => {
  return (
    <Button className="w-full" variant="secondary" onClick={addLink}>
      +Add new link
    </Button>
  );
};
