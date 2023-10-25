import clsx from "clsx";
import { UseFormRegister } from "react-hook-form";
import { Label } from "../Label";
import { ImageFieldPicture } from "./ImageFieldPicture";
import { ImageFieldButton } from "./ImageFieldButton";
import { ImageFieldInput } from "./ImageFieldInput";
import { ImageFieldError } from "./ImageFieldError";

type Props = {
  labelText: string;
  name: string;
  pictureURL?: string;
  register: UseFormRegister<any>;
  error?: any;
};

export const ImageField = (props: Props) => {
  const { labelText, name, pictureURL, register, error, ...rest } = props;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Label
          className="text-base"
          labelText={labelText}
          htmlFor={name}
          isLabelPicture
        />

        <div
          className={clsx(
            "relative w-[193px] h-[193px] flex justify-center items-center rounded-xl bg-purple-hover-secondary"
          )}
        >
          <ImageFieldButton pictureURL={pictureURL} />
          <ImageFieldPicture pictureURL={pictureURL} />
          <ImageFieldInput name={name} register={register} {...rest} />
        </div>
      </div>

      <ImageFieldError error={error} />
    </div>
  );
};
