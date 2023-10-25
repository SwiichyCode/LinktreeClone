import clsx from "clsx";
import type { LabelProps } from "./types";

export const Label = (props: LabelProps) => {
  const { labelText, error, isProfile, isLabelPicture, className, ...rest } =
    props;

  return (
    <div
      className={clsx(
        "flex items-baseline justify-between",
        isProfile && "gap-2"
      )}
    >
      <label
        className={clsx(
          "font-medium",
          isLabelPicture ? "text-grey text-base" : "text-darkgrey text-sm",
          className
        )}
        {...rest}
      >
        {labelText}
      </label>

      {error && (
        <span className="text-xs text-red-500 font-semibold">{error}</span>
      )}
    </div>
  );
};
