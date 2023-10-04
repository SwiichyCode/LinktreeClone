import { Button } from "@/app/_components/ui/Button";

type Props = {
  appendLink: () => void;
};

export const ButtonAppend = (props: Props) => {
  const { appendLink } = props;

  return (
    <Button
      className="w-full"
      variant="secondary"
      type="button"
      onClick={appendLink}
    >
      + Add new link
    </Button>
  );
};
