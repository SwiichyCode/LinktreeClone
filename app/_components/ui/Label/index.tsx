import type { LabelProps } from "./types";

export const Label = (props: LabelProps) => {
  const { labelText, error, ...rest } = props;

  return (
    <div className="flex items-baseline justify-between">
      <label className="text-sm font-medium text-darkgrey" {...rest}>
        {labelText}
      </label>

      {error && (
        <span className="text-xs text-red-500 font-semibold">{error}</span>
      )}
    </div>
  );
};
