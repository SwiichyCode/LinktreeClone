import { Button } from "@/app/_components/ui/Button";
import type { Link, Profile } from "@/app/_stores/types";

type Props = {
  state: "links" | "profile";
  links?: Link[] | undefined;
  profile?: Profile | undefined;
  linksPreview?: Link[] | undefined;
  linksValues?: Link[] | undefined;
  profileValues?: Profile | undefined;
};

export const FormSave = ({
  state,
  links,
  profile,
  linksPreview,
  linksValues,
  profileValues,
}: Props) => {
  const checkIfLinksChanged = () => {
    if (linksValues?.length !== links?.length) {
      return true;
    }

    const isEqual = linksValues?.every((value, index) => {
      return (
        value.url === links?.[index]?.url &&
        value.platform === links?.[index]?.platform
      );
    });

    return !isEqual;
  };

  const checkIfProfileChanged = () => {
    if (!profileValues || !profile) {
      return false;
    }

    return (
      profileValues.username === profile.username &&
      profileValues.firstname === profile.firstname &&
      profileValues.lastname === profile.lastname &&
      profileValues.email === profile.email
    );
  };

  const handleDisable = () => {
    if (state === "links") {
      return !linksPreview?.length || !checkIfLinksChanged();
    }

    if (state === "profile") {
      return checkIfProfileChanged();
    }
  };

  return (
    <div className="flex justify-end border-t border-input py-4">
      <Button
        className="w-full md:w-fit"
        type="submit"
        disabled={handleDisable()}
      >
        Save
      </Button>
    </div>
  );
};
