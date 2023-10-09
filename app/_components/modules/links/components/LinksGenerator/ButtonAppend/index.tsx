import { v4 as uuidv4 } from "uuid";
import type { UseFieldArrayAppend } from "react-hook-form";
import { useAvailablePlatform } from "@/app/_hooks/useAvailablePlatform";
import { Button } from "@/app/_components/ui/Button";

type Props = {
  append: UseFieldArrayAppend<any, "links">;
  fieldsLength: number;
};

export const ButtonAppend = (props: Props) => {
  const { append, fieldsLength } = props;
  const availablePlatforms = useAvailablePlatform();

  const handleClick = () => {
    if (fieldsLength >= 5) return;

    append({
      id: uuidv4(),
      url: "",
      platform: availablePlatforms[0].value,
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
