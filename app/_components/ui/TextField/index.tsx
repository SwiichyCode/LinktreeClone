import { Label } from "./Label";
import { Input } from "./Input";

interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  name: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  labelText: string;
  iconUrl?: string;
  register: any;
  setFocus: any;
  error: any;
}

export const TextField = ({
  name,
  labelText,
  iconUrl,
  register,
  setFocus,
  error,
  ...rest
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label labelText={labelText} htmlFor={name} error={error} />
      <Input
        name={name}
        iconUrl={iconUrl}
        register={register}
        setFocus={setFocus}
        error={error}
        {...rest}
      />
    </div>
  );
};
