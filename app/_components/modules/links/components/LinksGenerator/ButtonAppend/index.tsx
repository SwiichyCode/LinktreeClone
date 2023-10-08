import { Button } from "@/app/_components/ui/Button";
import { UseFieldArrayAppend } from "react-hook-form";

type Props = {
  append: UseFieldArrayAppend<any, "links">;
};

export const ButtonAppend = (props: Props) => {
  const { append } = props;

  const handleClick = () => {
    append({
      id: Math.random().toString(36).substr(2, 9),
      url: "",
      platform: "youtube",
    });
  };

  return (
    <Button
      className="w-full"
      variant="secondary"
      type="button"
      onClick={handleClick}
    >
      + Add new link
    </Button>
  );
};
