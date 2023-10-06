import React from "react";
import { Button } from "@/app/_components/ui/Button";
import { Link } from "@/app/_stores/link.store";

type Props = {
  links: Link[] | undefined;
  values: Link[] | undefined;
};

export const FormSave = ({ links, values }: Props) => {
  const checkIfValuesChanged = () => {
    if (!values) return;

    return values.some((value, index) => {
      return (
        value.url !== links?.[index]?.url ||
        value.platform !== links?.[index]?.platform
      );
    });
  };

  return (
    <div className="flex justify-end border-t border-input py-4">
      <Button
        className="w-full md:w-fit"
        type="submit"
        disabled={!links?.length || !checkIfValuesChanged()}
      >
        Save
      </Button>
    </div>
  );
};
