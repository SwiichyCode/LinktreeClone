import clsx from "clsx";

type Props = {
  error?: any;
};

export const ImageFieldError = ({ error }: Props) => {
  return (
    <p className={clsx("text-xs", error && "text-red-500")}>
      Image must be below 1024x1024px. Use PNG or JPG format.
    </p>
  );
};
