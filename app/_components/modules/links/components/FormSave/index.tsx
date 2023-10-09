import { Button } from "@/app/_components/ui/Button";
import { Link } from "@/app/_stores/link.store";

type Props = {
  links: Link[] | undefined;
  linksPreview: Link[] | undefined;
  values: Link[] | undefined;
};

export const FormSave = ({ links, linksPreview, values }: Props) => {
  const checkIfValuesChanged = () => {
    if (values?.length !== links?.length) {
      return true;
    }

    const isEqual = values?.some((value, index) => {
      return (
        value.url === links?.[index]?.url &&
        value.platform === links?.[index]?.platform
      );
    });

    return !isEqual;
  };

  return (
    <div className="flex justify-end border-t border-input py-4">
      <Button
        className="w-full md:w-fit"
        type="submit"
        disabled={!linksPreview?.length || !checkIfValuesChanged()}
      >
        Save
      </Button>
    </div>
  );
};
