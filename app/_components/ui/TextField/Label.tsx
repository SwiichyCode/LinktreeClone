interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  labelText: string;
  htmlFor: string;
  error: any;
}

export const Label = ({ labelText, htmlFor, error }: LabelProps) => {
  return (
    <div className="flex items-baseline justify-between">
      <label htmlFor={htmlFor} className="text-sm font-medium text-darkgrey">
        {labelText}
      </label>

      {error && (
        <span className="text-xs text-red-500 font-semibold">{error}</span>
      )}
    </div>
  );
};
