interface InputOptions {
  iconUrl?: string;
  register: any;
  error: any;
}

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputOptions;
