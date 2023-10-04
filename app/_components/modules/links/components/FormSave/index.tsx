import React from "react";
import { Button } from "@/app/_components/ui/Button";

export const FormSave = () => {
  return (
    <div className="flex justify-end border-t border-input py-4">
      <Button className="w-full md:w-fit" type="submit">
        Save
      </Button>
    </div>
  );
};
