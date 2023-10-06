import React from "react";
import { Control, useFieldArray, UseFormRegister } from "react-hook-form";
import { ButtonAppend } from "./ButtonAppend";
import { TextField } from "@/app/_components/ui/TextField";
import type { FormValues } from "../FormLinks";

type Props = {
  control: Control<any>;
  register: UseFormRegister<any>;
  children: React.ReactNode;
};

export const LinksGenerator = ({ control, register, children }: Props) => {
  const { fields, append, remove } = useFieldArray<FormValues>({
    control: control,
    name: "links",
  });

  return (
    <div className="flex flex-col space-y-4">
      <ButtonAppend append={append} />

      <ul className="flex flex-col gap-6 my-6">
        {fields.map((field, index) => (
          <div key={field.id}>
            <TextField
              labelText="Link"
              iconUrl="/icon-links-header.svg"
              name={`links.${index}.url`}
              register={register}
              defaultValue={field.url}
            />
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </div>
        ))}
      </ul>

      {children}
    </div>
  );
};
