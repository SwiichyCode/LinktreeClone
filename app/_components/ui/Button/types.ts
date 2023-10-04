interface ButtonOptions {
  variant?: "primary" | "secondary";
}

export type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

export type ButtonVariant = "primary" | "secondary";
