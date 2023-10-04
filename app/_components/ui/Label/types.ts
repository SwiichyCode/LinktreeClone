interface LabelOptions {
  labelText: string;
  error: any;
}

export type LabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  LabelOptions;
