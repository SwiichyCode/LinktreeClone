import Image from "next/image";
import Select from "react-select";
import { options } from "../../modules/links/components/LinksGenerator/data";
import { Link } from "@/app/_stores/link.store";
import { CustomStyle } from "./styles";

type Props = {
  onChange: (value: string) => void;
  link: Link;
  index: number;
};

export const Dropdown = (props: Props) => {
  const { onChange, link, index } = props;

  return (
    <Select
      onChange={(selectedOption: any) => {
        onChange(selectedOption?.value);
      }}
      defaultValue={
        options.find((option) => option.value === link.platform) || null
      }
      options={options}
      placeholder="Select platform"
      name={`link.${index}.platform`}
      classNamePrefix="react-select"
      styles={CustomStyle as any}
      getOptionLabel={(option) =>
        (
          <div className="flex items-center gap-3">
            <Image
              src={option.icon}
              width={16}
              height={16}
              alt={option.label}
            />
            <span>{option.label}</span>
          </div>
        ) as unknown as string
      }
    />
  );
};
