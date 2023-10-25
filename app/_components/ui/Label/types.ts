interface LabelOptions {
  labelText: string;
  error?: any;
  isProfile?: boolean;
  isLabelPicture?: boolean;
  className?: string;
}

export type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  LabelOptions;
