interface LabelOptions {
  labelText: string;
  error: any;
  isProfile?: boolean;
}

export type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  LabelOptions;
