import clsx from "clsx";
import Image from "next/image";
import { selectOptions } from "../../modules/links/components/LinksGenerator/data";
import { previewOptions } from "./data";
import type { Links } from "@/app/_stores/preview.store";

type Props = {
  linksPreview: Links[] | undefined;
};

export const PreviewLinks = ({ linksPreview }: Props) => {
  const skeletonCount = Math.max(
    0,
    5 - (linksPreview ? linksPreview.length : 0)
  );

  const handleBgColor = (platform: string) => {
    const option = previewOptions.find((option) => option.value === platform);
    return option?.color;
  };

  const getLabelOptions = (platform: string) => {
    const option = selectOptions.find((option) => option.value === platform);
    return option?.label;
  };

  return (
    <div className="flex flex-col gap-5">
      {linksPreview?.map((link) => (
        <div
          key={link.id}
          className={clsx(
            "w-[237px] h-11 flex justify-between items-center rounded-lg px-4"
          )}
          style={{ backgroundColor: handleBgColor(link.platform) }}
        >
          <div className="flex items-center gap-2">
            <Image
              src={`/preview-icon/icon-${link.platform}.svg`}
              width={20}
              height={20}
              alt={`icon-${link.platform}`}
            />
            <span className="text-white">{getLabelOptions(link.platform)}</span>
          </div>

          <Image
            src="/icon-arrow-right.svg"
            width={20}
            height={20}
            alt="arrow-right"
          />
        </div>
      ))}

      {[...Array(skeletonCount)].map((_, index) => (
        <div key={index} className="w-[237px] h-11 bg-[#EEE] rounded-lg" />
      ))}
    </div>
  );
};
