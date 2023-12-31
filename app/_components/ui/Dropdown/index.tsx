import Image from "next/image";
import Select from "react-select";
import { useAvailablePlatform } from "@/app/_hooks/useAvailablePlatform";
import { selectOptions } from "../../modules/links/components/LinksGenerator/data";
import { Link } from "@/app/_stores/types";
import { CustomStyle } from "./styles";

type Props = {
  onChange: (value: string) => void;
  link: Link;
  index: number;
};

export const Dropdown = (props: Props) => {
  const { onChange, link, index } = props;
  const availablePlatforms = useAvailablePlatform();

  return (
    <Select
      onChange={(selectedOption: any) => {
        onChange(selectedOption?.value);
      }}
      defaultValue={
        selectOptions.find((option) => option.value === link.platform) || null
      }
      options={availablePlatforms}
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
