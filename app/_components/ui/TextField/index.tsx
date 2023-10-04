import { Label } from "../Label";
import { Input } from "../Input";

interface TextFieldOptions {
  labelText: string;
  iconUrl?: string;
  register: any;
  error: any;
}

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  TextFieldOptions;

export const TextField = (props: InputProps) => {
  const { labelText, iconUrl, register, error, ...rest } = props;
  return (
    <div className="flex flex-col gap-2">
      <Label labelText={labelText} htmlFor={props.name!} error={error} />
      <Input
        name={props.name!}
        iconUrl={iconUrl}
        register={register}
        error={error}
        {...rest}
      />
    </div>
  );
};
