import { usePreviewStore } from "@/app/_stores/preview.store";
import { selectOptions } from "@/app/_components/modules/links/components/LinksGenerator/data";

export const useAvailablePlatform = () => {
  const { linksPreview } = usePreviewStore();

  const availablePlatforms = selectOptions.filter(
    (option) => !linksPreview.some((link) => link.platform === option.value)
  );

  return availablePlatforms;
};
