import clsx from "clsx";
import Image from "next/image";
import { selectOptions } from "../../modules/links/components/LinksGenerator/data";
import { previewOptions } from "./data";
import type { Links } from "@/app/_stores/preview.store";
import Link from "next/link";

type Props = {
  linksPreview: Links[] | undefined;
  isPreview?: boolean;
};

export const PreviewLinks = ({ linksPreview, isPreview }: Props) => {
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

  const isFrontendMentor = (platform: string) => {
    return platform === "frontendmentor";
  };

  return (
    <div className="flex flex-col gap-5">
      {linksPreview?.map((link) => (
        <Link
          href={link.url}
          target="_blank"
          key={link.id}
          className={clsx(
            "flex justify-between items-center rounded-lg px-4",
            isPreview ? "w-full h-14" : "w-[237px] h-11"
          )}
          style={{
            backgroundColor: handleBgColor(link.platform),
            border: isFrontendMentor(link.platform)
              ? "1px solid #D9D9D9"
              : "none",
          }}
        >
          <div className="flex items-center gap-2">
            <Image
              src={`/preview-icon/icon-${link.platform}.svg`}
              width={20}
              height={20}
              alt={`icon-${link.platform}`}
            />
            <span
              className={clsx(
                isFrontendMentor(link.platform) ? "text-darkgrey" : "text-white"
              )}
            >
              {getLabelOptions(link.platform)}
            </span>
          </div>

          <Image
            src={
              isFrontendMentor(link.platform)
                ? "/icon-arrow-right-dark.svg"
                : "/icon-arrow-right.svg"
            }
            width={20}
            height={20}
            alt="arrow-right"
          />
        </Link>
      ))}

      {!isPreview &&
        [...Array(skeletonCount)].map((_, index) => (
          <div
            key={index}
            className={clsx(
              "bg-[#EEE] rounded-lg",
              isPreview ? "w-full h-14" : "w-[237px] h-11"
            )}
          />
        ))}
    </div>
  );
};
