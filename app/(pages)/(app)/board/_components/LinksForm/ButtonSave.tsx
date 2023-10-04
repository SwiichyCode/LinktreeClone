import { Button } from "@/app/_components/ui/Button";

type Props = {
  emptyLinks: boolean;
};

export const ButtonSave = ({ emptyLinks }: Props) => {
  return (
    <Button className="w-full" type="submit" disabled={emptyLinks}>
      Save
    </Button>
  );
};
