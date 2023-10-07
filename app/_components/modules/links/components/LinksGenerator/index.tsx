import {
  Control,
  useFieldArray,
  UseFormRegister,
  FieldValues,
} from "react-hook-form";
import { ButtonAppend } from "./ButtonAppend";
import { LinksContent } from "./LinkContent";
import type { FormValues } from "../FormLinks";

type Props = {
  control: Control<FormValues, "links">;
  register: UseFormRegister<FormValues>;
  children: React.ReactNode;
};

export const LinksGenerator = (props: Props) => {
  const { control, register, children } = props;
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
            <LinksContent
              index={index}
              link={field}
              removeLink={() => remove(index)}
              register={register}
              control={control}
            />
          </div>
        ))}
      </ul>

      {children}
    </div>
  );
};
