import clsx from "clsx";
import type { LabelProps } from "./types";

export const Label = (props: LabelProps) => {
  const { labelText, error, isProfile, ...rest } = props;

  return (
    <div className="flex items-baseline justify-between">
      <label
        className={clsx(
          "text-sm font-medium",
          isProfile ? " text-grey" : "text-darkgrey"
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
